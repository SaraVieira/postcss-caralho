'use strict';
var chalk = require('chalk');
var c = require('./characters');
var space = ' ';
var Logger = require('../../log');
var logger = Logger('success-formatter');
logger.debug('loaded');

module.exports = function(result){
  logger.debug(result);
  return chalk.green(c.check) + space + chalk.white(result.filePath);
};
