module.exports = [
	{
		name: 'audio',
		description: 'Jouer un son',
		usage:	'audio <url>',
		aliases: [],
		execute(message, args, discord_bot, config) {
			const ytdl = require('ytdl-core');
			const ytsr = require('ytsr');
	
			var embed = require('../../app.js').defaultEmbed();
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
			
			if (message.channel.type !== 'text') return;
	
			const voiceChannel = message.member.voice.channel;
	
			if (!voiceChannel) {
				return message.reply('merci de rejoindre un salon vocal...');
			}
	
			embed.title = "Lecture de l'audio"
			embed.description = args.join(" ")
			message.channel.send({embed: embed});
			voiceChannel.join().then(connection => {
				var file = args.join(" ")
				connection.play(file);
			});
		}
	},
	{
		name: 'radio',
		description: 'RADIO PLUTON',
		usage:	'radio <url>',
		aliases: [],
		execute(message, args, discord_bot, config) {
	
			var embed = require('../../app.js').defaultEmbed();
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
			
			if (message.channel.type !== 'text') return;
	
			const voiceChannel = message.member.voice.channel;
	
			if (!voiceChannel) {
				return message.reply('merci de rejoindre un salon vocal...');
			}
	
			embed.title = "Lecture de l'audio"
			embed.description = args.join(" ")
			message.channel.send({embed: embed});
			voiceChannel.join().then(connection => {
				var file = args.join(" ")
				connection.play(file);
			});
		}
	}
]