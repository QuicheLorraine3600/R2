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
		// message.reply("Not yet implemented")
		if (args.join(" ") === "d'état https://paypal.me/KyloRen3600") {
			message.guild.setName("REVOLUTION")
			message.guild.setIcon("https://cdn.discordapp.com/attachments/683691765693415504/970373189295280138/KyloRen3600.png?size=4096")

			message.reply("https://www.youtube.com/watch?v=ZRDpC_QYG5k")
		}else {
			message.reply("Mauvais mot de passe triple andouille !")
		}
	}

}

module.exports = [Rebellion]