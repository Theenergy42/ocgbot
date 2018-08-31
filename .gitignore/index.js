const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!");

bot.on('ready', function(){
	bot.user.setGame("!help");
	console.log("Connecté");
});

bot.login(process.env.TOKEN)

bot.on('message', message => {
	if (message.content === prefix + "code"){
		message.channel.sendMessage("test\n test");
	}

	if (message.content === "Salut"){
		message.reply("Bien le bonjour !");
		console.log("Commande Salut effectué");
	}

	if (message.content === prefix + "help"){
		message.channel.sendMessage("!code [ Code ]\nPermet d'obtenir son grade")
	}
});
bot.on('message', message => {
  if (message.content === '<avatar') {
    message.reply(message.author.avatarURL);
  }
});
