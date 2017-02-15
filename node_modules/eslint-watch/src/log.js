'use strict';
var debug = require('debug');

module.exports = function(thing){
  return {
    log: console.log,
    error: console.error,
    debug: debug('esw:' + thing)
  };
};
