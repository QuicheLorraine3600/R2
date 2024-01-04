import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

export default class Ping extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('ping')
			.setDescription('Replies with Pong!')
	}

	override async execute(bot: Bot, interaction: Interaction) {
		interaction.reply("Pong")
	}
}