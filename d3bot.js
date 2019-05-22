const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("!Nic")) {
    message.channel.send("sucks!");
  }
});
 
client.login("ReplaceWithSecretKeyOnAccountLoginDriveDocumnet");