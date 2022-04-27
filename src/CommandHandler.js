const fs = require('fs');
const Discord = require('discord.js');
const { ErrorHandler } = require("./ErrorHandler");


class CommandHandler {
	#discordBot;
	#commandPrefix;
	#config;
	#errorHandler;

	constructor(discordBot, commandPrefix, config) {
		this.#discordBot = discordBot;
		this.#commandPrefix = commandPrefix;
		this.#config = config;
		this.#errorHandler = new ErrorHandler(discordBot);
		discordBot.commandPrefix = commandPrefix;
		discordBot.commands = new Discord.Collection();
		const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
		for (const file of commandFiles){
			if (!file.startsWith("-")){
				const commands = require(`./commands/${file}`);
				commands.forEach(Command => {
					const commandObject = new Command(discordBot);
					discordBot.commands.set(commandObject.name(), commandObject);
				});
			}
		}
		discordBot.on("messageCreate", (message) => {
			this.#handle(message);
		});

	}

	async #handle(message) {
		if (!message.content.startsWith(this.#commandPrefix) || message.content.length <= 1) return;
		const args = message.content.slice(this.#commandPrefix.length).split(/ +/);
		const command = args.shift().toLowerCase();
		if (this.#discordBot.commands.has(command)){
			const commandResults = await this.#discordBot.commands.get(command).execute(message, args, this.#discordBot);
			if (commandResults !== undefined) { //An error occurred
				this.#errorHandler.handle(message, command, commandResults[0]);
			}
		} else {
			this.#errorHandler.handle(message, command, "UNKNOWN_COMMAND");
		}
	}
}

module.exports = { CommandHandler }