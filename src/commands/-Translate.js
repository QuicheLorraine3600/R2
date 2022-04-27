const {Command} = require("../Command");

class Translate extends Command {

	constructor(discordBot) {
		super(discordBot, "ru", "Parler en RUSSE", "ru <message>");
	}

}

module.exports = [Translate]