import { SlashCommandBuilder, VoiceChannel } from "discord.js";
import { generateDependencyReport, joinVoiceChannel, getVoiceConnection, VoiceConnection  } from "@discordjs/voice";


import Bot from "../../Bot";
import { Command, Interaction } from "../Command";
import { SOUNDBOARD_SERVER } from "../../modules/SoundBoard/SoundBoardServer";

// console.log(generateDependencyReport());

export default class Connect extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('connect')
			.setDescription('Connecte le bot au salon vocal actuel')
	}

	override async execute(bot: Bot, interaction: Interaction) {
		if (interaction.guild === null) return
		
		// @ts-ignore
		const voiceChannel: VoiceChannel = interaction.member.voice.channel
		if (voiceChannel === null) {
			interaction.reply("Merci de rejoindre un salon vocal")
			return
		}

		const connection = connectToVoiceChannel(voiceChannel);
		connection.subscribe(SOUNDBOARD_SERVER.audioPlayer)
		interaction.reply("Salon actuel rejoint !")
	}
}

function connectToVoiceChannel(voiceChannel: VoiceChannel): VoiceConnection {
	// @ts-ignore
	let connection = getVoiceConnection(voiceChannel.guild.id);
	if (connection !== undefined) connection.destroy()
	connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
	});
	return connection;
}