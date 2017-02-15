'use strict';
var optionator = require('optionator');
var getOptions = require('./eslint/help');
var _ = require('lodash');
var logger = require('./log')('options');
logger.debug('Loaded');

var settings = {
  prepend: 'esw [options] [file.js ...] [dir ...]',
  concatRepeatedArrays: true,
  mergeRepeatedObjects: true
};

var myOptions = [{
  heading: 'Options'
}, {
  option: 'help',
  alias: 'h',
  type: 'Boolean',
  description: 'Show help'
}, {
  option: 'format',
  alias: 'f',
  type: 'String',
  default: 'simple-detail',
  description: 'Use a specific output format'
}, {
  option: 'watch',
  alias: 'w',
  type: 'Boolean',
  description: 'Enable file watch'
}];

module.exports = function(cllbk){
  getOptions(function(eslintOptions){
    var options;
    var newOptions = _.union(myOptions, eslintOptions);
    settings.options = newOptions;

    try {
      options = optionator(settings);
      cllbk(options);
    } catch(e){
      logger.error(e);
      throw e;
    }
  });
};
