const {Command} = require("../Command")
const {EmbedBuilder} = require("../EmbedBuilder")

class HelpCommand extends Command {

	constructor(discordBot) {
		super(discordBot, "help", "Afficher la liste des commandes", "help <commande>");
	}

	async execute(message, args, config) {
		const discordBot = this._discordBot;
		const embed = EmbedBuilder('', message.author);
		const commands = discordBot.commands;
		const command = args[0]
		if (command !== undefined){
			if (commands.has(command)){
				embed.title = message.content;
				embed.description = `Description: **${discordBot.commands.get(command).description()}**\nUtilisation: \`\`${discordBot.commandPrefix}${discordBot.commands.get(command).usage()}\`\``;
				message.channel.send({embeds: [embed]});
				return
			}else{
				return ["UNKNOWN_COMMAND"]
			}
		}
		embed.color = 0x808080;
		embed.title = "Liste des commandes disponibles";
		embed.description = `*${discordBot.commandPrefix}help <commande>*`;
		const list = [];
		commands.forEach(command => {
			if (!list.includes(command.name())){
				embed.fields.push({
					name: `\`${discordBot.commandPrefix}${command.name()}\``,
					value: `\`\`\`${command.description()}\`\`\``
				});
				list.push(command.name())
			}
		});
		message.channel.send({embeds: [embed]});
	}

}

module.exports = [ HelpCommand ]