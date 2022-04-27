const discordTTS = require("discord-tts");

const { joinVoiceChannel } = require('@discordjs/voice');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const sentences = [
	"je dirais que oui :thinking:",
	"sans doutes...",
	"évidemment !",
	"non... euh oui !",
	"non mais ça va pas ???",
	"blip blop bip bip",
	"efjipouegpjouger",
	"oui, nom d'une catapulte",
	"j'en sais rien, demande à l'autre chat",
	"j'ai une tête à savoir la réponse ?",
	"je sais pas, mais je sais que David ferait un excellent dîner",
	"des sources sûres m'indiquent que oui !",
	"j'ai entendu dire que c'était le cas",
	"non, oui",
	"oui, non",
	"décide à pile ou face",
	"c'est pas mon problème",
	"vas voir au goulag si j'y suis",
	"dégage"
]

module.exports = [
	{
		name: 'ask',
		description: "Poser une question",
		usage:	'ask <question fermée>',
		aliases: [],
		async execute(message, args, discord_bot, config) {
			if (args[0] !== undefined){
				// const voiceChannel = message.member.voice.channel;
				// if (!voiceChannel) {
				// 	message.reply(sentences[getRandomInt(sentences.length)])
				// 	return
				// }
				// console.log(voiceChannel)
				//
				// let connection = await joinVoiceChannel({
				// 	channelId: voiceChannel.id,
				// 	guildId: voiceChannel.guildId,
				// 	adapterCreator: voiceChannel.guild.voiceAdapterCreator,
				// });
				//
				//     const stream = discordTTS.getVoiceStream(`${message.member.displayName} me demande si ${args.join(" ")}. ${ sentences[getRandomInt(sentences.length)]}`
				//
				//        , lang="fr");
				//     const dispatcher = connection.play(stream);
				// const connection = await message.member.voice.channel.join()
				// voiceChannel.join().then(connection => {
				//     const stream = discordTTS.getVoiceStream(`${message.member.displayName} me demande si ${args.join(" ")}. ${ sentences[getRandomInt(sentences.length)]}`
				//
				//        , lang="fr");
				//     const dispatcher = connection.play(stream);
				// })
			}else{
				return ["MISSING_ARGUMENT"]
			}

		}
	}
]    
    