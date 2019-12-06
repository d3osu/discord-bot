/*
Module to log all bot interactions to the console
Based on https://github.com/AnIdiotsGuide/guidebot/blob/master/modules/Logger.js

*/

// imports
const chalk = require('chalk');
const moment = require('moment');

/*
Simple logging based on the content and type of message sent.

Params: text - the content of the sent message
        type - what kind of message it was
*/
exports.logger = (text, type = 'log') => {
  const timestamp = `[${moment().format('LTS')}]`;
  switch (type) {
    case 'log': {
      return console.log(`${timestamp} => ${chalk.white.bgBlack(type)} ${text}`);
    }
    case 'warn': {
      return console.log(`${timestamp} => ${chalk.bgYellow(type)} ${text}`);
    }
    case 'error': {
      return console.log(`${timestamp} => ${chalk.bgRed(type)} ${text}`);
    }
    case 'debug': {
      return console.log(`${timestamp} => ${chalk.bgCyan(type)} ${text}`);
    }
    case 'cmd': {
      return console.log(`${timestamp} => ${chalk.bgWhite(type)} ${text}`);
    }
    case 'ready': {
      return console.log(`${timestamp} => ${chalk.black.bgGreen(type)} ${text}`);
    }
    default: throw new TypeError('Type must be log, warn, error, debug, cmd, or ready');
  }
};
