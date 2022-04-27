const {Command} = require("../Command");

const {createAudioPlayer, createAudioResource, StreamType, joinVoiceChannel, AudioPlayerStatus} = require("@discordjs/voice");
const fs = require("fs");

const discordTTS=require("discord-tts");

function randint(min, max) {
	return Math.floor(
		Math.random() * (max - min) + min
	)
}

function playAudio(voiceChannel, audioResource) {
	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guildId,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
	});
	const player = createAudioPlayer();
	connection.subscribe(player);

	player.on(AudioPlayerStatus.Idle, () => {
		setTimeout(() => player.stop(), 1000)
	});

	player.play(audioResource);
}

class Speak extends Command {

	constructor(discordBot) {
		super(discordBot, "speak", "Faire parler R2", "speak <message>");
	}

	async execute(message, args, config) {

		if (args.length === 0) return ["MISSING_ARGUMENT"]

		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) {
			message.reply("Rejoins un channel vocal andouille")
			return
		}

		const name = message.member.nickname || message.author.username
		const stream = discordTTS.getVoiceStream(name + " m'a demandé de dire " + args.join(" "), {lang: "fr"});
		const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});

		playAudio(voiceChannel, audioResource);

	}
}

class Sardoche extends Command {

	#audioFiles

	constructor(discordBot) {
		super(discordBot, "sardoche", "SARDOCHE", "sardoche");
		this.#audioFiles = fs.readdirSync('./assets/sardoche').filter(file => file.endsWith('.mp3') || file.endsWith('.mp4')).map(file => "./assets/sardoche/" + file);
	}

	async execute(message, args, config) {
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) {
			message.reply("Rejoins un channel vocal andouille")
			return
		}
		const audioResource = createAudioResource(this.#audioFiles[randint(0, this.#audioFiles.length)]);
		playAudio(voiceChannel, audioResource);
	}
}

class Ask extends Command {

	#sentences

	constructor(discordBot) {
		super(discordBot, "ask", "Poser une question au grand R2", "ask <question>");
		this.#sentences = fs.readFileSync('./assets/responses.txt', 'utf8').toString().split(/\r?\n/);
	}

	async execute(message, args, config) {
		if (args.length === 0) return ["MISSING_ARGUMENT"]
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) {
			message.reply(this.#sentences[randint(0, this.#sentences.length)])
			return
		}
		const sentence = this.#sentences[randint(0, this.#sentences.length)];
		const stream = discordTTS.getVoiceStream(sentence, {lang: "fr"});
		const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
		playAudio(voiceChannel, audioResource);
	}
}


module.exports = [Sardoche, Speak, Ask]