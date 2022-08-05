const {Command} = require("../Command");

class Eval extends Command {
	constructor(discordBot) {
		super(discordBot, "eval", "eval", "eval <code>");
	}

	async execute(message, args, config) {
		if (message.author.id == "321639963848343563"){
			try{
				eval(args.join(" "))
				message.reply("code executé sans erreur !")
			}
			catch (error){
				message.reply("code executé avec l'erreur suivante: ```\n" + error + "\n```")
			}
		}
	}
}

module.exports = [ Eval ]