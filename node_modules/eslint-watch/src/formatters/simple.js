'use strict';
var error = require('./helpers/error-warning');
var c = require('./helpers/characters');

module.exports = function (results) {
  var message = '';
  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    if (result.errorCount !== 0 || result.warningCount !== 0) {
      message += error(result);
      message += c.endLine;
    }
  }
  return message;
};
