import { SlashCommandBuilder } from "discord.js";

import Bot from "../../Bot";
import { Command, Interaction } from "../Command";

import DefaultEmbed from "../../utils/DefaultEmbed";

export default class Ping extends Command {
	override get data() {
		return new SlashCommandBuilder()
			.setName('help')
			.setDescription("HELP MEEEEE !")
	}

	override async execute(bot: Bot, interaction: Interaction) {
		const commands = bot.commandHandler.registeredCommands

		const fields: {name: string, value: string}[] = []
		commands.forEach(command => {
			fields.push({
				name: `\`${command.data.name}\``,
				value: `\`\`\`${command.data.description}\`\`\``
			})
		})

		const embed = 
			new DefaultEmbed()
				.setTitle("Liste des commandes disponibles")
				.setFields(fields)
		
		interaction.reply({ embeds: [embed] })
	}
}