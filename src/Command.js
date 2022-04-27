class Command {

	_discordBot;
	_name;
	_description;
	_usage;

	constructor(discordBot, name, description, usage){
		this._discordBot = discordBot;
		this._name = name;
		this._description = description;
		this._usage = usage;
	}

	name() {
		return this._name;
	}

	description() {
		return this._description;
	}

	usage() {
		return this._usage;
	}


	async execute(message, args, discord_bot, config) {}
}

module.exports = { Command }