const { createVerify } = require('crypto');

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
		name: 'avatar',
		description: 'Obtenir votre avatar',
		usage:	'avatar',
		aliases: [],
		execute(message, args, discord_bot, config) {
			var embed = require('../../app.js').defaultEmbed();
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
			embed.title = message.content
			var user = getUserFromMention(discord_bot, args[0])
			//var user = discord_bot.users.cache.get(args[0]);
			if (user != undefined){
				embed.description = `__Avatar de ${user.username}:__`
				embed.image.url = user.avatarURL().replace("webp", "png?size=1024")
				embed.url = user.avatarURL().replace("webp", "png?size=1024")
				message.channel.send({embed: embed});
				return
			}
			embed.description = `__Avatar de ${message.author.username}:__`
			embed.image.url = message.author.avatarURL().replace("webp", "png?size=1024")
			embed.url = message.author.avatarURL().replace("webp", "png?size=1024")
			message.channel.send({embed: embed});
		}
	}
]	
	