const embedBuilder = require("../src/EmbedBuilder");
const COMMAND_PREFIX = process.env.COMMAND_PREFIX;


function manageCommandError(discordBot, message, command, error) {
	const embed = embedBuilder(message.content, message.author, 0xff0000);
	switch (error) {
		case "MISSING_ARGUMENT":
			embed.description = `Description: **${discordBot.commands.get(command).description}**\nUtilisation: \`\`${COMMAND_PREFIX}${discord_bot.commands.get(command).usage}\`\``;
			embed.fields.push({
				name: 'Utilisation incorrecte !',
				value: '-_-'
			});
			message.channel.send({embeds: [embed]});
			break;
		case "MISSING_PERMISSION":
			embed.description = '**Vous n\'avez pas accès à cette commande !** :frowning:';
			message.channel.send({embeds: [embed]});
			break;
		case "UNKNOWN_COMMAND":
			embed.description = '**Commande inconnue !** :frowning:';
			embed.fields.push({
				name: `Faites **${COMMAND_PREFIX}help** pour voir la liste des commandes.`,
				value: '-_-'
			})
			message.channel.send({embeds: [embed]});
			break;
		default:
			break;
	}
}

module.exports = {manageCommandError}