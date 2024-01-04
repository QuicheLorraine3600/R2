import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

const img = "https://cdn.discordapp.com/attachments/682155089124917255/1192575566524731533/OVERWATCH_PROPAGANDA.png"

export default class Overwatch extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('overwatch')
			.setDescription('I want you')
			.addUserOption(option => 
				option.setName("pgm")
					.setDescription("Qui appeler à la rescousse ?")
					.setRequired(true)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const pgm = interaction.options.getUser("pgm", true)
		interaction.reply(`${img} <@${pgm.id}>`)
	}
}