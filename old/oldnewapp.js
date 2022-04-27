const COMMAND_PREFIX = process.env.COMMAND_PREFIX;

const logger = require("../src/Logger").createLogger("APP", ["console", "logs/app.log"])
console.log("-------------------------------------------------------------------------------")
logger.info("Starting app...")

const fs = require('fs');
const Discord = require('discord.js');

const config = require("../config.json");
const errorManager = require("./ErrorManager");

const discordBot = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES] });
discordBot.commands = new Discord.Collection();

// const startScripts = fs.readdirSync('./start_scripts').filter(file => file.endsWith('.js'));
// for (const file of startScripts){
// 	if (!file.startsWith("-")){
// 		const startCommands = require(`./old/start_scripts/${file}`);
// 		startCommands.forEach(cmd => {
// 			// cmd.execute(discordBot, config, datas);
// 			cmd.execute(discordBot, config, {});
// 		});
// 	}
// }

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
	if (!file.startsWith("-")){
		const commands = require(`./old/commands/${file}`);
		commands.forEach(cmd => {
			discordBot.commands.set(cmd.name.toLowerCase(), cmd);
			cmd.aliases.forEach((alias) => {
				discordBot.commands.set(alias.toLowerCase(), cmd);
			})
		});
	}
}

// discordBot.on("messageCreate", async function(message){
// 	if (!message.content.startsWith(COMMAND_PREFIX) || message.content.length <= 1) return;
// 	const args = message.content.slice(COMMAND_PREFIX.length).split(/ +/);
// 	const command = args.shift().toLowerCase();
//
// 	if (discordBot.commands.has(command)){
// 		const commandResult = await discordBot.commands.get(command).execute(message, args, discordBot);
// 		if (commandResult !== undefined) { //An error occurred
// 			errorManager.manageCommandError(discordBot, message, command, commandResult[0]);
// 		}
// 	} else {
// 		errorManager.manageCommandError(discordBot, message, command, "UNKNOWN_COMMAND");
// 	}
// });

discordBot.on('ready', () => {
	discordBot.user.setPresence({ activity: { name: '🎶 Radio Pluton avec le Broco Bot 💕', type: "LISTENING" }, status: 'idle' })
	//discordBot.user.setPresence({ activity: { name: '🎶 Radio Pluton avec le Broco Bot 💕'},  type="CUSTOM_STATUS") , status: 'idle' });
});



discordBot.login(process.env.BOT_TOKEN).then(r => logger.info("Discord Bot logged !"));

module.exports = {
	discordBot
}