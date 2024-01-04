import { GuildMember, SlashCommandBuilder, TextChannel } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

import { registerScheduledMessage, ScheduledMessage } from "../../modules/CronScheduler";

export default class ScheduleMessage extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('schedulemessage')
			.setDescription('Ultimate Message Scheduler')
			.addStringOption(option =>
				option.setName("message")
					.setDescription("Your ultimate message")
					.setRequired(true)
					.setMaxLength(2000)
			)
			.addIntegerOption(option =>
				option.setName("day")
					.setDescription("1-31")
					.setMinValue(1).setMaxValue(31)
					.setRequired(true)
			)
			.addIntegerOption(option =>
				option.setName("month")
					.setDescription("1-12")
					.setMinValue(1).setMaxValue(12)
					.setRequired(true)				
			)
			.addIntegerOption(option =>
				option.setName("hour")
					.setDescription("0-23")
					.setMinValue(0).setMaxValue(23)
					.setRequired(true)
			)
			.addIntegerOption(option =>
				option.setName("minute")
					.setDescription("0-59")
					.setMinValue(0).setMaxValue(59)
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const channel = interaction.channel
		const message = interaction.options.getString("message", true)
		const day = interaction.options.getInteger("day", true)
		const month = interaction.options.getInteger("month", true)
		const hour = interaction.options.getInteger("hour", true)
		const minute = interaction.options.getInteger("minute", true)

		if (channel instanceof TextChannel && interaction.member instanceof GuildMember) {

			const scheduledMessage: ScheduledMessage = {
				cron: `${minute} ${hour} ${day} ${month} *`,
				guildId: channel.guild.id,
				channelId: channel.id,
				message: message,
				author: interaction.member.displayName,
				avatar: interaction.member.avatarURL() ?? interaction.user.avatarURL() ?? ""
			}

			registerScheduledMessage(bot, scheduledMessage)

			interaction.reply({ content: "Message programmé !", ephemeral: true })
		}
	}
}