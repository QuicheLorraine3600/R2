import { GuildMember, SlashCommandBuilder, TextChannel } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

import sendWebhookMessageToChannel from "../../utils/WebhookMessage"

const CRAZY_FROG = "<a:russian_frog_1:759387072967868486><a:russian_frog_2:759387073114931210><a:russian_frog_3:759387086104166451>"

export default class CrazyFrog extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('crazyfrog')
			.setDescription('TARATATATATATATATA')
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const channel = interaction.channel
		if (channel instanceof TextChannel && interaction.member instanceof GuildMember) {
			sendWebhookMessageToChannel(channel, interaction.member.displayName ?? "", interaction.member.avatarURL() ?? interaction.user.avatarURL() ?? "", CRAZY_FROG).then(() => {
				interaction.reply({ content: "Message envoyé", ephemeral: true })
			})
		}	
	}
}