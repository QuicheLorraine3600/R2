function randint(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = [
	{
		execute(discord_bot, config, datas) {
			const emojis = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾".split(" ")
			//const emojis = "❤"
			discord_bot.on("message", async function(message){
				return
				if (message.author.id == "560576325149261834"){
					message.react("❤")
				}
				if (message.author.id == datas.react){
					message.react(emojis[randint(emojis.length)])
				}
				return
				if (message.author.id == "373930375849967628" || message.author.id  == "560576325149261834"){
					const channel = message.channel;
					member = message.guild.members.cache.get("373930375849967628")		
					console.log(member)
					var name = member.nickname || member.user.username
					try {
						const webhooks = await channel.fetchWebhooks();
						const webhook = webhooks.first();
		
						await webhook.send("<:kylodisapproves:679746728383217788>", {
							username: name,
							avatarURL: member.user.avatarURL(),
		
						});
					} catch (error) {
						console.error('Error trying to send: ', error);
					}
				}
				return
			})
		}
	}
]