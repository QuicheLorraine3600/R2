const { EmbedBuilder } = require("./EmbedBuilder");

class ErrorHandler {

	#discordBot;

	constructor(discordBot) {
		this.#discordBot = discordBot;
	}

	async handle(message,commandName, error) {

		const embed = EmbedBuilder(message.content, message.author, 0xff0000);
		const discordBot = this.#discordBot;

		switch (error) {
			case "MISSING_ARGUMENT":
				const command = discordBot.commands.get(commandName);
				embed.description = `Description: **${command.description()}**\nUtilisation: \`\`${discordBot.commandPrefix}${command.usage()}\`\``;
				embed.fields.push({
					name: 'Utilisation incorrecte !',
					value: '-_-'
				});
				message.channel.send({embeds: [embed]})
				break;
			case "MISSING_PERMISSION":
				embed.description = '**Vous n\'avez pas accès à cette commande !** :frowning:';
				message.channel.send({embeds: [embed]});
				break;
			case "UNKNOWN_COMMAND":
				embed.description = '**Commande inconnue !** :frowning:';
				embed.fields.push({
					name: `Faites **${discordBot.commandPrefix}help** pour voir la liste des commandes.`,
					value: '-_-'
				})
				message.channel.send({embeds: [embed]});
				break;
			default:
				break;
		}
	}
}

module.exports = { ErrorHandler }