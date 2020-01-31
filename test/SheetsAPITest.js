const GoogleSheetsClient = require('./../modules/GoogleSheetsLocalAuth.js'); 

var oauth2Client = GoogleSheetsClient.returnAuthorizedClient();
var sheetsInstance = new SheetsInstance(oauth2Client);

sheetsInstance.getAllCompanyNames(); 
for (companyName in sheetsInstance){
  console.log(companyName);
}