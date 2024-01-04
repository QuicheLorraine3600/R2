import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

import { getRandomQuote, getEmbedOfQuote } from "../../modules/QuoteAPI"
import logger from "../../modules/Logger";

export default class Ping extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('motivateme')
			.setDescription('Gimme motivation plz')
			.addMentionableOption(option =>
				option.setName("target")
					.setDescription("The target")
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {

		const target = interaction.options.getMentionable("target") ?.toString()
		getRandomQuote().then(quote => {
			getEmbedOfQuote(quote).then(embed => {
				interaction.reply({ content: target, embeds: [ embed ] })
			})
		}).catch((error) => {
			logger.error(error)
			interaction.reply({ content: "No quote found", ephemeral: true })
		})
	}
}