const Logger = require('../modules/ConsoleLogger')

Logger.print('This is a log message / white on black', 'log');
Logger.print('This is a warning / yellow background', 'warn');
Logger.print('This is an error / red background', 'error');
Logger.print('This is a debug message / cyan background', 'debug');
Logger.print('This is a cmd / white background', 'cmd');
Logger.print('This is a ready message / black on green', 'ready');
