const fs = require('fs');
const Logger = require('./../modules/ConsoleLogger');
const path = require('path');
const assert = require('assert');

// Working around improper JSON file reading

var rawFile;
fs.readFile(path.resolve('./credentials.json'), 'utf-8', (err, content) => {
  if (err) return Logger.print('Error reading json creds file: ' + err, 'error');
  Logger.print('Contents of the json creds file: ' + JSON.parse(content), 'debug')
});

