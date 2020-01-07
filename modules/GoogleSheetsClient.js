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

// this file needs to be deleted if the above scope changes
const TOKEN_PATH = './token.json';

// Object interface style module 
var GoogleSheetsClient = (function () {
  
  // Private scope variables
  var _clientCredentials; // From API website that identifies user / permissions
  var _oauth2Client;      // OAuth2 client that is verified using the clientCredential
  var _sheetData;         // raw sheet data from the desired spreadsheet

  function initializeModule(){
    getCredentials();
    authorize();
  }

  // Private helper methods
  function getCredentials() {
    jsonCredentials = fs.readFile('./credentials.json', (err, content) => {
      if (err) return Logger.print('Error loading client secrets file', 'error');
      _clientCredentials = content;
    });
  }

  function authorize() {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    _oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Check for stored API token, or generate a new one
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewAPIToken();
      _oauth2Client.setCredentials(JSON.parse(token));
    });
  }

  // currently written for offline mode (bot runs on an Azure VM) --> will change if deployed to a server
  function getNewAPIToken() {
    const authUrl = _oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });
    
    Logger.print('Enter the code from that page here: ' + authUrl, 'log');
    const inputRead = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    inputRead.question('Enter the code from that page here: ', (code) => {
      inputRead.close();
      _oauth2Client.getToken(code, (err, token) => {
        if (err) return Logger.print('Error while trying to trying to retrieve access token' + err, 'error');
        _oauth2Client.setCredentials(token);
        // Store the token to disk for later executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return Logger.print('Error writing the token.json file: ' + err, 'error');
          Logger.print('Token stored to ' + TOKEN_PATH, 'log');
        })
      })
    });
  }

  function returnSheetsInstance(spreadsheetID){
    
  }
  
  // Public interface methods
  function getPitchDeckData() {
    initializeModule();

  }

  function getSVSData() {
    initializeModule();

  }

  // Reveal public methods to caller
  return {
    getPitchDeckData: getPitchDeckData,
    getSVSData: getSVSData
  };

})();
