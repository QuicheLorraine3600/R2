import { SlashCommandBuilder, TextChannel } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

import sendWebhookMessageToChannel from "../../utils/WebhookMessage"

export default class FakeMessage extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('fakemessage')
			.setDescription("Envoyer un faux message")
			.addUserOption(option => 
				option.setName("target")
					.setDescription("Ta cible")
					.setRequired(true)
			)
			.addStringOption(option =>
				option.setName("message")
					.setDescription("Ton message")
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {

		const targetUser = interaction.options.getUser("target", true)
		const message = interaction.options.getString("message", true)

		const channel = interaction.channel
		if (channel instanceof TextChannel) {
			sendWebhookMessageToChannel(channel, targetUser.displayName ?? "", targetUser.avatarURL() ?? "", message).then(() => {
				interaction.reply({ content: "Message envoyé", ephemeral: true })
			})
		}	
	}
}