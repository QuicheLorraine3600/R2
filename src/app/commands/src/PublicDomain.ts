import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

export default class PublicDomain extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('publicdomain')
			.setDescription('Github link')
	}

	override async execute(bot: Bot, interaction: Interaction) {
		interaction.reply("https://github.com/QuicheLorraine3600/R2")
	}
}