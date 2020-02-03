const fs = require('fs');
const Logger = require('./../modules/ConsoleLogger');
const path = require('path');

// Working around improper JSON file reading

// var rawFile = fs.readFile('./../credentials.json', 'utf-8', (err, content) => {
//   if (err) return Logger.print('Error reading json file.', 'error');
//   return content;
// });

Logger.print(path.resolve(__dirname, "./../credentials.json"), 'debug');
