/* 
Direct any questions with this code to Andrew on Discord.

This script handles the setup with Discord, and delegates all messages with the command precedent "!" 
to a basic interpreter. Handles other things like class setup, etc.

*/

// This will check if the node version you are running is the required
// Node version, if it isn't it will throw the following error to inform
// you.
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

// Load in dependencies
const Discord = require("discord.js");
const Enmap = require("enmap");

// Initialize the client
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