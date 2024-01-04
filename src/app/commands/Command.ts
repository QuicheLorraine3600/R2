import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import Bot from "../Bot";

export type Interaction = ChatInputCommandInteraction<CacheType>

export class Command {

	get data(): Pick<SlashCommandBuilder, "toJSON" | "name" | "description"> {
		return new SlashCommandBuilder()
	}

	async execute(bot: Bot, interaction: Interaction) {

	}
}