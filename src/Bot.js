const Discord = require('discord.js');
const {CommandHandler} = require("./CommandHandler");
const {CustomCache} = require("./CustomCache");

const intents = [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES];

class Bot extends Discord.Client {

	#config
	#customCache
	#commandHandler

	constructor(commandPrefix, config) {
		super({intents});
		this.#config = config;
		this.#customCache = new CustomCache();
		this.#commandHandler = new CommandHandler(this, commandPrefix, config);
	}

	customCache() {
		return this.#customCache;
	}
}




module.exports = { Bot }