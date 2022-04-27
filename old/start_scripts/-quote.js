const embedBuilder = require("../../src/EmbedBuilder");

module.exports = [
	{
		execute(discord_bot, config, datas) {
			discord_bot.on("messageCreate", async function(message){
				if (message.author.bot) return;
				if (message.content.startsWith(`https://discordapp.com/channels/${message.guild.id}`)){
					const link = message.content.split(" ");
					const args = link[0].split("/");
					const channel = message.guild.channels.cache.get(args[5]);
					if (channel !== undefined){
						channel.messages.fetch(args[6])
						.then(msg => {
							const embed = embedBuilder('', msg.author)
							embed.description = msg.content.toString();
							embed.footer = {
								text: 'Cité par ' + message.author.username,
								icon_url: message.author.avatarURL(),
							}
							embed.timestamp = msg.createdTimestamp
							message.channel.send({embeds: [embed]})
							console.log("push")
							try{
								message.delete()
							}catch{}
						}).catch();
					}
				}
			})
		}
	}
]