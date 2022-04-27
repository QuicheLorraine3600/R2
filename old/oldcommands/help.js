const PREFIX = process.env.COMMAND_PREFIX;
const embedBuilder = require("../src/utils/DefaultEmbed");

module.exports = [
	{
		name: 'help',
		description: 'Afficher la liste des commandes',
		usage:	'commands',
		aliases: ["commands", "commandes"],
		execute(message, args, discord_bot) {
			const embed = embedBuilder('', message.author);
			const commands = discord_bot.commands;
			const command = args[0]
			if (command !== undefined){
				if (commands.has(command)){
					embed.title = message.content;
					const aliases = discord_bot.commands.get(command).aliases;
					if (aliases.length === 0){
						embed.description = `Description: **${discord_bot.commands.get(command).description}**\nUtilisation: \`\`${PREFIX}${discord_bot.commands.get(command).usage}\`\``;
					}else{
						embed.description = `Description: **${discord_bot.commands.get(command).description}**\nUtilisation: \`\`${PREFIX}${discord_bot.commands.get(command).usage}\`\`\nAlias: **${aliases.join(", ")}**`;
					}
					message.channel.send({embeds: [embed]});
					return
				}else{
					return ["UNKNOWN_COMMAND"]
				}
			}
			embed.color = 0x808080;
			embed.title = "Liste des commandes disponibles";
			embed.description = `*${PREFIX}help <commande>*`;
			const list = [];
			commands.forEach(command => {
				if (!list.includes(command.name)){
					embed.fields.push({
						name: `\`${PREFIX}${command.name}\``,
						value: `\`\`\`${command.description}\`\`\``
					});
					list.push(command.name)	
				}
			});
			message.channel.send({embeds: [embed]});
		}
	}
]





