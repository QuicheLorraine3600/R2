module.exports = [
	{
		name: 'status',
		description: 'Changer le statut du bot',
		usage:	'status <statut>',
		aliases: [],
		execute(message, args, discord_bot, config) {
			if (args[0] != undefined){
				discord_bot.user.setPresence({ activity: { name: args.join(" ") }, status: 'idle' });
			}else{
				return ["MISSING_ARGUMENT"]
			}
		}
	}
]