module.exports = [
	{
		name: 'send',
		description: 'Envoyer un message',
		usage:	'send',
		aliases: [],
		execute(message, args, discord_bot, config) {
			if (message.author.id == '321639963848343563'){
				message.channel.send(args.join(' '))
				message.delete()
			}
		}
	}
]	
	