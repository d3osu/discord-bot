/*
Module to extract spreadsheet data from Google Sheets for the bot.
Resources: https://developers.google.com/sheets/api/quickstart/nodejs

Used in the context of a VM or running on a local machine as opposed to 
bot deployed to a server (i.e. Amazon EC2).
*/

const Logger = require('./ConsoleLogger')

// Not best practice, but reasonably encapsulated 'globals'. Non-private info.
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// this file needs to be deleted if the above scope changes
const TOKEN_PATH = './token.json';

function getCredentials() {
  var rawJSON = fs.readFile('./../credentials.json', (err, content) => {
    if (err) return Logger.print('Error loading client secrets file', 'error');
    return content;
  });

  return rawJSON;
}

function authorize(clientCredentials) {
  oauth2Client = new google.auth.OAuth2(
    clientCredentials.client_id, 
    clientCredentials.client_secret, 
    clientCredentials.redirect_uris[0]
  );
  // Check for stored API token, or generate a new one
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewAPIToken(oauth2Client);
    oauth2Client.setCredentials(JSON.parse(token));
  });
  return oauth2Client;
}

// currently written for offline mode (bot runs on an Azure VM / PC)
function getNewAPIToken(oauth2Client) {
  const authUrl = oauth2Client.generateAuthUrl({
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
    oauth2Client.getToken(code, (err, token) => {
      if (err) return Logger.print('Error while trying to trying to retrieve access token' + err, 'error');
      oauth2Client.setCredentials(token);
      // Store the token to disk for later executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return Logger.print('Error writing the token.json file: ' + err, 'error');
        Logger.print('Token stored to ' + TOKEN_PATH, 'log');
      })
    })
  });
}

// public access to data
function returnAuthorizedClient(){
  var credentials = getCredentials();
  var client = authorize(credentials);
  return client;
}

// only function exposed to the caller
module.exports = {
  returnAuthorizedClient: returnAuthorizedClient,
  getCredentials: getCredentials
};


