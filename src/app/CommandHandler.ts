import { Map as ImmutableMap } from "immutable"
import { Events } from "discord.js";

import Bot from "./Bot";
import CommandList from "./commands/Commands";
import { Command } from "./commands/Command";

import logger from "./modules/Logger";


export default class CommandHandler {
	
	public readonly registeredCommands: ImmutableMap<string, Command>

	constructor(bot: Bot) {
	
		const map = new Map<string, Command>()
		CommandList.forEach(command => {
			const commandName = command.data.name
			map.set(commandName, command)
		})

		this.registeredCommands = ImmutableMap(map)

		bot.client.on(Events.InteractionCreate, async interaction => {
			if (!interaction.isChatInputCommand()) return
			if (interaction.replied) return

			const command = this.registeredCommands.get(interaction.commandName)
			if (command === undefined) {
				logger.error(`No command matching ${interaction.commandName} was found.`)
				return
			}

			try {
				await command.execute(bot, interaction)
			} catch (error) {
				logger.error(error)
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true })
				} else {
					await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
				}
			}
		})
	}
}
