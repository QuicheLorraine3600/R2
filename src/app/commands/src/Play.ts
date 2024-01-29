import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";
import { SOUNDBOARD_SERVER } from "../../modules/SoundBoard/SoundBoardServer";

import play from "play-dl"
import { createAudioResource } from "@discordjs/voice";

export default class Play extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('play')
			.setDescription('Play a YouTube video')
			.addStringOption(option =>
				option.setName('url')
					.setDescription('the video')
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		if (interaction.guild === null) return
		
		const url = interaction.options.getString("url", true);

		let stream = await play.stream(url)
		const resource = createAudioResource(stream.stream, {
			inputType: stream.type
		})

		SOUNDBOARD_SERVER.audioPlayer.play(resource)
		interaction.reply("Musique en cours de lecture !")
	}
}
