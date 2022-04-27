module.exports = [
	{
		name: 'tts',
		description: 'Demander à R2 de parler',
		usage:	'tts <message>',
		aliases: [],
		execute(message, args, discord_bot, config) {

			if (args[0] == undefined){
				return ["MISSING_ARGUMENT"]
			}
			if (message.channel.type !== 'text') return;
			const voiceChannel = message.member.voice.channel;
			if (!voiceChannel) {
				return message.reply('merci de rejoindre un salon vocal...');
			}

			const discordTTS = require("discord-tts");
			voiceChannel.join().then(connection => {
				const stream = discordTTS.getVoiceStream(`${message.member.displayName} me demande de dire ${args.join(" ")}`, lang="fr");
				const dispatcher = connection.play(stream);
			})
	  
		}
	}
]