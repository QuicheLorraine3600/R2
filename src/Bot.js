const Discord = require('discord.js');
const {CommandHandler} = require("./CommandHandler");
const {DataSaver} = require("./DataSaver");

const intents = [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES];

class Bot extends Discord.Client {

	#config
	#dataSaver
	#commandHandler

	constructor(commandPrefix, config) {
		super({intents});
		this.#config = config;
		this.#dataSaver = new DataSaver();
		this.#commandHandler = new CommandHandler(this, commandPrefix, config);
	}

	dataSaver() {
		return this.#dataSaver;
	}
}




module.exports = { Bot }