// const LocalAuth = require('./../modules/GoogleSheetsLocalAuth');
// var credentials = LocalAuth.getCredentials();
// console.log(credentials);

const fs = require('fs');
var rawFile = fs.readFile('./../credentials.json');
var stringyFile = JSON.stringify(rawFile);
var jsonStr = JSON.parse(stringyFile
  );
console.log(jsonStr.installed);
console.log(jsonStr.installed.client_id);