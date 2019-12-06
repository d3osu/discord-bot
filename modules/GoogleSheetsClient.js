/*
Module to extract spreadsheet data from Google Sheets for the bot.
Resources: https://developers.google.com/sheets/api/quickstart/nodejs
*/

const Logger = require('/ConsoleLogger.js')

// Not best practice, but reasonably encapsulated 'globals'. Non-private info.
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// file needs to be deleted if the above scope changes
const TOKEN_PATH =  'token.json';

// Object interface style module
var GoogleSheetsClient = (function () {
  
  // Private scope variables
  var _clientCredentials;
  var _authorizedClient;
  var _sheetData;

  // Private helper methods
  function getCredentials() {
    jsonCredentials = fs.readFile('/..credentials.json', (err, content) => {
      if (err) return logger('Error loading client secrets file', 'error');
      _clientCredentials = content;
    });
  }

  function authorize(credentials, callback) {

  }
  
  // Public interface methods
  function getPitchDeckData() {
    getCredentials();
    authorize(_clientCredentials);

  }

  function getSVSData() {

  }
  
  // Function to test data pull, outputs into the terminal
  function writeDataToConsole() {
    
  }

})();
