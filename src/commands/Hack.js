const {Command} = require("../Command");

class Rebellion extends Command {

	constructor(discordBot) {
		super(discordBot, "coup", "Faire un coup d'état", "coup d'état <mot de passe>");
	}

	async execute(message, args, config) {

		// const savedGuildDatas = {
		// 	name: message.guild.name,
		// 	icon: message.guild.iconURL()
		// }
		//
		// this._discordBot.customCache().set("serverDatas", message.guildId, savedGuildDatas)
		// this._discordBot.customCache().saveAll()
		message.reply("Not yet implemented")

	}

}

module.exports = [Rebellion]