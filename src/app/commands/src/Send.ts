import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

export default class Send extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('send')
			.setDescription('Envoyer un message')
			.addStringOption(option =>
				option.setName('message')
					.setDescription('Le gentil message')
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const message = interaction.options.getString("message", true);

		if (interaction.user.id === "321639963848343563") {
			interaction.channel?.send(message)
			interaction.reply({ content: "Message envoyé", ephemeral: true })
		} else {
			interaction.reply(":see_no_evil:")
		}
	}
}