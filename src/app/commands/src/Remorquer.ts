import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

export default class Remorquer extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('remorquer')
			.setDescription('Utiliser la remorque du Bot')
			.addStringOption(option =>
				option.setName("monkey")
					.setDescription("Le singe à remorquer")
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const monkey = interaction.options.getString('monkey', true);

		if (Math.random() < 0.5) {
			interaction.reply(`**<@${interaction.user.id}>** remorque **${monkey}** !!!!`)
		} else {
			interaction.reply(`**${monkey}** remorque **<@${interaction.user.id}>** !!!!`)
		}
	}
}