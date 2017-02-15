'use strict';
var chokidar = require('chokidar');
var eslint = require('eslint');
var chalk = require('chalk');
var _ = require('lodash');
var path = require('path');

var success = require('./formatters/helpers/success');
var formatter = require('./formatters/simple-detail');
var logger = require('./log')('watcher');
logger.debug('Loaded');

var events = {
  change: 'change'
};
var chokidarOptions = {
  ignored: /\.git|node_modules|bower_components/
};
var cliOptionProperties = [
  'config', 'eslintrc', 'ext',
  'parser', 'cache', 'cacheLocation',
  'ignore', 'ignorePath', 'ignorePattern',
  'fix', 'parserOptions', 'global'
];
var cliOptionMap = {
  config: 'configFile',
  eslintrc: 'useEslintrc',
  ext: 'extensions',
  cacheFile: 'cacheLocation'
};

function successMessage(result) {
  logger.debug('result: %o', result);
  if (!result.errorCount && !result.warningCount) {
    return success(result) + chalk.grey(' (' + new Date().toLocaleTimeString() + ')');
  }
  return '';
}

///https://github.com/eslint/eslint/blob/233440e524aa41545b66b2c3c7ca26fe790e32e0/tests/lib/cli-engine.js#L105-L107

module.exports = function watcher(options) {
  var cliOptions = _(options)
    .pick(cliOptionProperties)
    .reduce(function(result, value, key){
      key = cliOptionMap[key] || key;
      result[key] = value;
      return result;
    }, {});
  logger.debug(cliOptions);
  logger.debug(options);
  var cli = new eslint.CLIEngine(cliOptions);

  function lintFile(path) {
    logger.debug('lintFile: %s', path);
    var results = cli.executeOnFiles([path]).results;
    logger.log(successMessage(results[0]));
    logger.log(formatter(results));
  }

  function isWatchableExtension(filePath, extensions) {
    logger.debug(filePath, extensions);
    if (extensions) {
      return _.includes(extensions, path.extname(filePath));
    }

    // Use the ESLint default extension, if none is provided
    return _.includes(cli.options.extensions, path.extname(filePath));
  }
  var watchDir = options._.length ? options._ : [path.resolve('./')];
  chokidar.watch(watchDir, chokidarOptions)
    .on(events.change, function (path) {
      logger.debug('Changed:', path);
      if (!cli.isPathIgnored(path) && isWatchableExtension(path, options.ext)) {
        lintFile(path);
      }
    }).on('error', logger.error);

  logger.debug('Watching: %o', watchDir);
};
