'use strict';

var eslint = require('./cli');
var _ = require('lodash');
var logger = require('../log')('eslint-help');
logger.debug('Loaded');

var namedOption = /^--/;

function parseNo(option, str){
  if(!str) return;

  var cmd = str.replace('--', '');
  if(/no-/.test(cmd)){
    logger.debug('Parsing no option', str);
    cmd = cmd.replace('no-', '');
    option.default = 'true';
  }
  option.option = cmd;
  return option;
}

function parseDouble(arr){
  var description = _.without(arr.slice(2),'').join(' ');
  return {
    option: arr[0].replace('--', ''),
    type: 'Boolean',
    alias: arr[1].replace('--', ''),
    description: description
  };
}

function parseRegular(arr){
  logger.debug('Parsing %s', arr[0]);
  if(!arr[0]){
    return;
  }
  var optionText = arr[0];
  var type = arr[1] || 'Boolean';
  var option = {};
  option = parseNo(option, optionText);

  option.type = type;

  var helpText = _.without(arr, optionText, type, '');

  var description = helpText.join(' ');
  if(description){
    option.description = description;
  }
  return option;
}

function parseAlias(arr){
  var alias = arr[0];
  logger.debug('Alias found: %s', alias);
  var option = parseRegular(_.without(arr, alias));

  if(alias){
    option.alias = alias.replace('-','');
  }
  return option;
}

function createOption(arr){
  var option;

  if(namedOption.test(arr[0]) && namedOption.test(arr[1])){  // no alias defaulted boolean
    option = parseDouble(arr);
  } else if(namedOption.test(arr[0]) && !namedOption.test(arr[1])){ // just a no alias
    option = parseRegular(arr);
  } else {// aliased or other
    option = parseAlias(arr);
  }
  var isEmpty = _.isEmpty(option);
  return isEmpty ? undefined : option;
}

function parseHelp(helpText){
  var helpArr = helpText.split('\n');
  var newArr = [];
  var previousLine = [];
  _.each(helpArr, function(row, index){
    if(index <= 2){
      return;
    } else {
      var str = row.replace(',', '');
      var arr = str.trim().split(' ');
      if(str.indexOf('-') >= 0 && previousLine[0] !== ''){
        var option = createOption(arr);
        if(option && option.option !== 'format' && option.option !== 'help'){
          newArr.push(option);
        }
      }
      previousLine = arr;
    }
  });
  return newArr;
}

// rewrite in es6 this callback yucky stuff goes away.
module.exports = function(callback){
  logger.debug('Executing help');
  eslint(['--help'], {}, {}, function(result){
    logger.debug('Help text received');
    callback(parseHelp(result.output));
  });
};
