function display (seconds) {
	const format = val => `0${Math.floor(val)}`.slice(-2)
	const hours = seconds / 3600
	const minutes = (seconds % 3600) / 60
	return [hours, minutes, seconds % 60].map(format).join(':')
  }

module.exports = [
	{
		name: 'info',
		description: 'Obtenir des informations sur le bot',
		usage:	'quote',
		aliases: [],
		execute(message, args, discord_bot, config, datas) {
			var embed = datas.utils.defaultEmbed()
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
			embed.title = "Informations de fonctionnement de R2"

			embed.fields.push({
				name: 'Version:',
				value: `${datas.version}`
			});

			const used = process.memoryUsage().heapUsed / 1024 / 1024;
			const total = process.memoryUsage().heapTotal / 1024 / 1024;

			embed.fields.push({
				name: 'Mémoire:',
				value: `${Math.round(used * 100) / 100}/${Math.round(total * 100) / 100} Mo`
			});

			var date = datas.start_date.toLocaleString("fr", {timeZone: "Europe/Paris"})

			embed.fields.push({
				name: 'En ligne depuis le:',	
				value: `${date}`
			});

			var working_time = Date.now() - datas.start_time
			console.log(working_time)	
			embed.fields.push({
				name: 'Temps en ligne:',
				value: display(working_time/1000)
			});

			message.channel.send({embed: embed})
		}
	}
]