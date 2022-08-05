module.exports = [
	{
		name: 'eval',
		description: 'Commande secrète',
		usage:	'eval <expression>',
		aliases: [],
		execute(message, args, discord_bot, config, datas) {
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
]