'use strict';
var path = require('path');
var _ = require('lodash');
var logger = require('./log')('arg-parser');
logger.debug('Loaded');

var simpleDetail = 'simple-detail';
var formatterPath = 'formatters';

var defaultPath = './';
var formatKey = '-f';
var keys = {
  '-w': true,
  '--watch': true
};
var formats = { // still don't like this can cause too much duplication
  'simple': true,
  'simple-success': true,
  'simple-detail': true
};

var getPath = function(options){
  logger.debug('GetPath: %s', options.format);
  return path.join(__dirname, formatterPath, options.format);
};

module.exports = {
  parse: function (cliArgs, options) {
    var arr = [];
    var dirs = options._;
    var formatSpecified = false;
    var args = _.slice(cliArgs, 2, cliArgs.length);
    logger.debug('Directories to check: %o', dirs);
    logger.debug('Args %o', args);
    _.each(args, function(item){
      if (!keys[item] && !formats[item]) {
        logger.debug('Pushing item: %s', item);
        arr.push(item);
      }
      if (formats[item]) {
        formatSpecified = true;
        logger.debug('Format specified');
        arr.push(getPath(options));
      }
    });
    if (options.format === simpleDetail && !formatSpecified) {
      logger.debug('setting custom formatter');
      arr.push(formatKey);
      arr.push(getPath(options));
    }
    if (!dirs.length) {
      arr.push(defaultPath);
      logger.debug('Setting default path: %s', defaultPath);
    }
    return arr;
  }
};
