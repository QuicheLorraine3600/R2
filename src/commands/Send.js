const {Command} = require("../Command");

class Send extends Command {
	constructor(discordBot) {
		super(discordBot, "send", "Envoyer un message", "send");
	}

	async execute(message, args, config) {
		if (message.author.id === '321639963848343563'){
			message.channel.send(args.join(' '))
			message.delete()
		}
	}
}

module.exports = [ Send ]