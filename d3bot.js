const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready to rumble.");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("!Nic")) {
    message.channel.send("sucks!");
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("!yee")) {
		message.channel.send("haw");
	}
});

/*
  Shortcuts for sharing the weekly slidedecks! - Nic 8/7/19

  Eventually change to a better way where we can just use regex with saved constant like variables
  instead of multiple if statements. Also, auto send these updates every week instead of calling it.
*/
client.on("message", (message) => {
	if (message.content.startsWith("!week1")) {
		message.channel.send("https://docs.google.com/presentation/d/1fv1EpXEO9_NziwLGaiHFHAz65X3pbSCLyUr2DlS58lg/edit?usp=sharing");
	} else if (message.content.startsWith("!week2")) {
		message.channel.send("https://docs.google.com/presentation/d/1lODyojvZbFVg7BxV-sxPmQbJZR8HGuTviZ8T658IjcA/edit?usp=sharing");
	} else if (message.content.startsWith("!week3")) {
		message.channel.send("https://docs.google.com/presentation/d/1BQcAKb1hM2iZKf9c3c_zNr7lgnl0wLUgv4F5ipAtrrA/edit?usp=sharing");
	} else if (message.content.startsWith("!week4")) {
		message.channel.send("https://docs.google.com/presentation/d/1Xv-MpV3jB2YPUjX6Y9O5a81HfNt_knjMhzKYCc4TOzU/edit?usp=sharing");
	} else if (message.content.startsWith("!week5")) {
		message.channel.send("https://docs.google.com/presentation/d/1Le6JlLkmSaveNPTVyFyxuYzVJHRQtGuo3hkjUZ7tsDM/edit?usp=sharing");
	} 
});

/*
	Tasks sections.
*/
 
client.login("INSERT BOT TOKEN");