import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

export default class Ping extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('eval')
			.setDescription('??????????')
			.addStringOption(option =>
				option.setName('code')
					.setDescription('Your code')
					.setRequired(true)
			)
			.addBooleanOption(option =>
				option.setName('ephemeral')
					.setDescription('Ephemeral ?')
					.setRequired(false)
			)
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const code = interaction.options.getString("code", true);
		const eph = interaction.options.getBoolean("ephemeral") ? true : false;

		const message = interaction;

		if (interaction.user.id === "321639963848343563") {
			try{
				eval(code)
				interaction.reply({ content: "Code exécuté avec succès !", ephemeral: eph })
			}
			catch (error){
				interaction.reply({ content: "Code executé avec l'erreur suivante: ```\n" + error + "\n```", ephemeral: eph })
			}
		} else {
			interaction.reply(":see_no_evil:")
		}
	}
}