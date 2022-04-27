const COMMAND_PREFIX = process.env.COMMAND_PREFIX;

const logger = require("../src/Logger").createLogger("APP", ["console", "logs/app.log"])
console.log("-------------------------------------------------------------------------------")
logger.info("Starting app...")

var datas = {
	permissions: {},
	react: undefined,
	version: process.env.HEROKU_RELEASE_VERSION,
	start_date: new Date(),
	start_time: Date.now(),
}

const fs = require('fs');
const Discord = require('discord.js');
const config = require('../config.json');

const config = require('./src/utils/DefaultEmbed');


const discord_bot = new Discord.Client();
discord_bot.commands = new Discord.Collection();

const startFiles = fs.readdirSync('./start_scripts').filter(file => file.endsWith('.js'));
for (const file of startFiles){
	if (!file.startsWith("-")){
		var startCommands = require(`./old/start_scripts/${file}`);
		startCommands.forEach(cmd => {
			cmd.execute(discord_bot, config, datas);
		});
	}
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
	if (!file.startsWith("-")){
		const commands = require(`./old/commands/${file}`);
		commands.forEach(cmd => {
			discord_bot.commands.set(cmd.name.toLowerCase(), cmd);
			cmd.aliases.forEach((alias) => {
				discord_bot.commands.set(alias.toLowerCase(), cmd);
			})
		});
	}
};

discord_bot.on("message", async function(message){
	//setTimeout(() => {
	//	message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
	let embed;
//}, 5000)
	if (!(message.content.startsWith(config.prefix) || message.content.startsWith("PLS".toLowerCase())) || message.author.bot){
		try{
			if (message.mentions.members.first().id === discord_bot.user.id){
				if(message.author.id === "321639963848343563"){
					message.reply("que puis-je faire pour vous Empereur Suprême ?")
				}else if(message.author.id == "584726955304288257"){
					message.reply("que puis-je faire pour vous madame ?")
				}else{
					message.reply("R2-D2 à votre service, par ici les pourboires: https://paypal.me/KyloRen3600")
				}
			}
		}catch{}
		return
	}
	if (message.content === COMMAND_PREFIX) return;
	const args = message.content.slice(COMMAND_PREFIX.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content.startsWith("PLS".toLowerCase())){
		if (message.content.startsWith("PLS EAT".toLowerCase())){
			if(message.guild.id === "670966543542386708"){
				const channel = message.channel;
				const member = message.guild.members.cache.get("270904126974590976");
				const name = member.nickname || member.user.username;
				try {
					const webhooks = await channel.fetchWebhooks();
					const webhook = webhooks.first();
					delete args[0]
	
					await webhook.send("You eat <@" + message.mentions.users.first() + "> with sauce becamel.", {
						username: name,
						avatarURL: member.user.avatarURL(),
					});
				}catch(error) {
					console.error('Error trying to send: ', error);
				}
			}
		}
		return
	}
	if (discord_bot.commands.has(command)){
		try {
			var test = await discord_bot.commands.get(command).execute(message, args, discord_bot, config, datas);
			if (test !== undefined){
				switch (test[0]) {
					case "MISSING_ARGUMENT":
						embed = utils.defaultEmbed();
						embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
						embed.title = message.content;
						embed.color = 0xff0000;
						var aliases = discord_bot.commands.get(command).aliases
						if (aliases.length == 0){
							embed.description = `Description: **${discord_bot.commands.get(command).description}**\nUtilisation: \`\`${config.prefix}${discord_bot.commands.get(command).usage}\`\``;	
						}else{
							embed.description = `Description: **${discord_bot.commands.get(command).description}**\nUtilisation: \`\`${config.prefix}${discord_bot.commands.get(command).usage}\`\`\nAlias: **${aliases.join(", ")}**`;	
						}
						embed.fields.push({
							name: 'Utilisation incorrecte !',
							value: '-_-'
						});
						message.channel.send({embed: embed});
						break;
					case "MISSING_PERMISSION":
						embed = utils.defaultEmbed();
						embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
						embed.title = message.content;
						embed.color = 0xff0000;
						embed.description = '**Vous n\'avez pas accès à cette commande !** :frowning:';
						message.channel.send({embed: embed});	
						break;
					case "UNKNOWN_COMMAND":
						embed = utils.defaultEmbed();
						embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
						embed.title = message.content;
						embed.color = 0xff0000;
						embed.description = '**Commande inconnue !** :frowning:';
						embed.fields.push({
							name: `Faites **${config.prefix}help** pour voir la liste des commandes.`,
							value: '-_-'
						})
						message.channel.send({embed: embed});	
						break;
					default:
						break;
				}
			}
		} catch (error){
				console.error(error);		
			};
	}else{
		embed = utils.defaultEmbed();
		embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
		embed.title = message.content;
		embed.color = 0xff0000;
		embed.description = '**Commande inconnue !** :frowning:';
		embed.fields.push({
			name: `Faites **${config.prefix}help** pour voir la liste des commandes.`,
			value: '-_-'
		})
		message.channel.send({embed: embed});		
	}
})

discord_bot.on('ready', () => {
	discord_bot.user.setPresence({ activity: { name: '🎶 Radio Pluton avec le Broco Bot 💕', type: "LISTENING" }, status: 'idle' })
	//discord_bot.user.setPresence({ activity: { name: '🎶 Radio Pluton avec le Broco Bot 💕'},  type="CUSTOM_STATUS") , status: 'idle' });
});

discord_bot.login(process.env.BOT_TOKEN).then(r => logger.info("Discord Bot logged !"));

module.exports = {
	config,
	discord_bot,
	defaultEmbed: utils.defaultEmbed,
}