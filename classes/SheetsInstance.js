//imports
const GoogleSheetsClient = require('./modules/GoogleSheetsClient.js');
const {google} = require('googleapis');
const Logger = require('./modules/ConsoleLogger.js');

// constants --> refactor to config file // may not be needed


/*
Middleware to access sheets and pull game data
*/
class SheetsInstance {
  googleClient;
  startupsData;
  pitchDeckData;
  constructor(googleOAuthClient) {
    this.googleClient = googleOAuthClient;
  }

  getSVSData() {
    var _auth = this.googleClient;
    const sheets = google.sheets({version: 'v4', _auth});
    sheets.spreadsheets.values.get({
      spreadsheetId: '1nQeqcTRuYiE5I9evRWJpzd1crwXwTgOK7XGDPVuqHyk',
      range: 'Class Data!A2:E',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        console.log('Name, Major:');
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row) => {
          console.log(`${row[0]}, ${row[4]}`);
      });
      } else {
        console.log('No data found.');
      }
    });
  }

  getPitchDeckData() {
    var _auth = this.googleClient;
    const sheets = google.sheets({version: 'v4', _auth});
    sheets.spreadsheets.values.get({
      spreadsheetId: '1vnwRYhQyM2zpiWf9NKiBc_L2vIhL603AyXsrm2JGO50',
      range: 'Class Data!A2:E',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        console.log('Name, Major:');
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row) => {
          console.log(`${row[0]}, ${row[4]}`);
      });
      } else {
        console.log('No data found.');
      }
    });
  }

  getAllCompanyNames() {
    var _auth = this.googleClient;
    const sheets = google.sheets({version: 'v4', _auth});
    sheets.spreadsheets.values.get({
      spreadsheetId: '1nQeqcTRuYiE5I9evRWJpzd1crwXwTgOK7XGDPVuqHyk',
      range: 'CompanyName!A:A',
    }, (err, res) => {
      if (err) return Logger.log('The API returned an error: ' + err, 'error');
      const rows = res.data.values;
      if (rows.length) {
        Logger.log('Company Names: ', 'debug');
        // print the first column
        rows.map((row) => {
          Logger.log(`${row[0]}`, 'debug');
      });
      } else {
        Logger.log('No data found.', 'debug');
      }
    });
  }

  returnSVSData() {
    
  }

  returnPitchDeckData() {

  }

}

// caller constructor format ==> var myCat = SheetsInstance.SheetInstance(authParam);
module.exports = SheetsInstance;