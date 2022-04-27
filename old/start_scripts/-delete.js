module.exports = [
	{
		execute(discord_bot, config, datas) {
			discord_bot.on("messageDelete", async function(message){
				var embed = datas.utils.defaultEmbed();
				embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
				embed.description = message.content
				embed.timestamp = message.createdTimestamp
				embed.footer.text = "Supprimé"
				embed.footer.icon_url = ""
				discord_bot.channels.cache.get("724659416997298226").send({embed: embed})
				embed.title = "Hop hop hop !"
				if (datas.permissions.delete_hunter.includes(message.author.id)){
					message.channel.send({embed: embed})
				}
			});
		}
	}
]