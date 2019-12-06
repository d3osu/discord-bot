/* 
Javascript class to represent the Silicon Valley Startups game
Modified for the use of D3 Discord server.

The rules and uses of this class can be found in the repo's readme.md
*/

const GoogleSheetsClient = require('/../modules/GoogleSheetsClient.js');
const Logger = require('/../modules/ConsoleLogger.js');

class SVS {
  constructor(channel = 'svs-temp'){
      this.channel = channel;
  }

  /* 
  Runs a game of SVS from start to finish.

  Pulls game data from Drive, and is responsible for calling helper functions
  below to follow flow of the game.  
  */
  game()
} 