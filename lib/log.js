const fancyLog = require('fancy-log');

/**
 * Custom console log function to output styled status messages.
 *
 * @param {object} message - A message to print to the console with formatting.
 *
 */
function log(...message) {
  fancyLog.apply(false, message);
}

exports.log = log;