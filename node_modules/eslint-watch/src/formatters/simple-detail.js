// Template Author Sindre Sorhus @eslint
// https://github.com/sindresorhus/eslint-stylish
'use strict';
var chalk = require('chalk');
var table = require('text-table');
var c = require('./helpers/characters');
var Logger = require('../log');
var logger = Logger('simple-detail');

logger.debug('loaded');

var tableSettings = {
  align: ['', '', 'r'],
  stringLength: function (str) {
    return chalk.stripColor(str).length;
  }
};

function pluralize(word, count) {
  return (count === 1 ? word : word + 's');
}

function simpleDetail(results) {
  var totalErrors = 0;
  var totalWarnings = 0;
  var output = '';
  var cleanMsg = '';
  var messageTime = chalk.gray('(' + new Date().toLocaleTimeString() + ')');
  logger.debug(results);
  results.forEach(function (result) {
    var messages = result.messages;
    var warnings = 0;
    var errors = 0;
    if (!messages.length) {
      return;
    }

    var tableText = table(
      messages.map(function (message) {
        function getMessageType(msg) {
          if (msg.fatal || msg.severity === 2) {
            totalErrors++;
            errors++;
            return chalk.red(c.x);
          }

          totalWarnings++;
          warnings++;
          return chalk.yellow(c.ex);
        }

        return ['',
          getMessageType(message),
          message.line || 0,
          message.column || 0,
          chalk.dim(message.message.replace(/\.$/, '')),
          chalk.gray(message.ruleId || '')];
      }), tableSettings);

    output += chalk.white.underline(result.filePath) + ' (' + chalk.red(errors) + '/' + chalk.yellow(warnings) + ')' + c.endLine;
    output += tableText.split(c.endLine).map(function (el) {
      return el.replace(/(\d+)\s+(\d+)/, function (m, p1, p2) {
        return chalk.gray(p1 + ':' + p2);
      });
    }).join(c.endLine) + c.endLine + c.endLine;
  });

  if(totalErrors) {
    output += chalk.red(c.x + ' ' + totalErrors + ' ' + pluralize('error', totalErrors)) + ' ';
  }
  if (totalWarnings) {
    output += chalk.yellow(c.ex + ' ' + totalWarnings + ' ' + pluralize('warning', totalWarnings)) + ' ';
  }

  if(results.length > 0 || !results.length) {
    cleanMsg = chalk.green(c.check + ' Clean') + ' ' + messageTime + c.endLine;
  }

  output = (totalErrors || totalWarnings) ? output + messageTime + c.endLine : cleanMsg;

  return output;
}

module.exports = simpleDetail;
