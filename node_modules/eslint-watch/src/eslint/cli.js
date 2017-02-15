'use strict';
var path = require('path');
var os = require('os');
var fs = require('fs');
var exec = require('../executor');

var logger = require('../log')('eslint-cli');
logger.debug('Loaded');

var windows = os.platform() === 'win32';

var cmd = windows ? '.cmd' : '';

var eslintPath = (function loadEslintPath(){
  var eslintPath;
  try {
    eslintPath = path.join('./', 'node_modules/.bin/eslint' + cmd);
    fs.accessSync(eslintPath);
  } catch (e) {
    eslintPath = path.join(process.env._, '../eslint' + cmd);
    fs.accessSync(eslintPath);
  }
  return eslintPath;
})();

logger.debug('EsLint path: %s', eslintPath);
var spawn = exec.spawn;

module.exports = function(args, options, childOptions, callback){
  logger.debug('eslint: %o', args);
  spawn(eslintPath, args, childOptions, function eslint(result){
    if(result.fatal){
      throw result.output;
    }
    callback({
      exitCode: result.exitCode,
      output: result.output
    });
  });
};
