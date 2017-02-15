'use strict';
var chalk = require('chalk');
var space = ' ';
var divider = '/';

module.exports = function(result){
  if(result.errorCount || result.warningCount){
    return chalk.red(result.errorCount) + divider +
      chalk.yellow(result.warningCount) + space +
      chalk.white(result.filePath);
  } else {
    return chalk.red(result.messages.length) + space +
      chalk.white(result.filePath);
  }
};
