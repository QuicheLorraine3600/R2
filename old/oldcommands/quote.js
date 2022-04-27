module.exports = [
	{
		name: 'quote',
		description: 'Obtenir une citation',
		usage:	'quote',
		aliases: [],
		execute(message, args, discord_bot, config) {
			const request = require('request')
			const gis = require('g-i-s');
			var embed = require('../../app.js').defaultEmbed()
			var quote = require("../../assets/star_wars_quotes.js")()
			var author = quote.split("\n")[1].replace("-", "", 1)
			quote = quote.split("\n")[0]
			embed.author.name = author
			embed.description = quote
			gis(author, (error, results) => {
				if (error) {}
				else{
					try{embed.author.icon_url = results[0].url}catch{}
					message.channel.send({embed: embed})
				}
			});
		}
	}
]