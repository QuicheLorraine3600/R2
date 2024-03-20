import { SlashCommandBuilder, TextChannel } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

export default class Delete extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('delete')
			.setDescription('Delete a message')
			.addStringOption(opt =>
				opt.setName("channel")
					.setDescription("The channel id")
					.setRequired(true)
			)
			.addStringOption(opt =>
				opt.setName("message")
					.setDescription("The message id")
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const channelId = interaction.options.getString("channel", true)
		const messageId = interaction.options.getString("message", true)
		

		const commandChannel = interaction.channel
		if (commandChannel instanceof TextChannel) {
			commandChannel.guild.channels.fetch(channelId).then(channel => {
				if (channel instanceof TextChannel) channel.messages.fetch(messageId).then(message => {
					message.delete().then(() => {
						interaction.reply({ content: "Message deleted !", ephemeral: true })
					})
				})
				else interaction.reply({ content: "Not a channel", ephemeral: true })
			})
			
		}

		
	}
}