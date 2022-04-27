function getUserFromMention(client, mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = [
	{
		name: 'age',
		description: 'Obtenir l\'âge de quelqu\'un',
		usage:	'age <clown>',
		aliases: [],
		execute(message, args, discord_bot, config) {
			var embed = require('../../app.js').defaultEmbed();
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
			embed.title = message.content
			var user = getUserFromMention(discord_bot, args[0])
			//var user = discord_bot.users.cache.get(args[0]);
			if (user == undefined){
				user = message.author
			}
			embed.description = `__Date de création du compte de ${user.username}:__\n \n**${user.createdAt}**`
			message.channel.send({embed: embed});
		}
	}	
]	
	