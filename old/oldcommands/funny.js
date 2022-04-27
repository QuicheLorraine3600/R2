function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getUserFromMention(client, message, mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return message.guild.members.cache.get(mention);
	}
}

module.exports = [
	{
		name: 'share',
		description: 'Partager de l\'argent',
		usage:	'share',
		aliases: ["paypal"],
		execute(message, args, discord_bot, config) {
			message.reply("pour partager votre argent, envoyez le à https://paypal.me/KyloRen3600.")
		}
	},
	{
		name: 'remorquer',
		description: "Remorquer quelqu'un",
		usage:	'remorquer <utilisateur>',
		aliases: [],
		execute(message, args, discord_bot, config) {
			message.channel.send(`<@${message.author.id}> **REMORQUE** ${args.join(" ")} **!!!!!!!!!!!!!!!!!!!!!!!**`);
			//message.channel.send(`${args.join(" ")} **REMORQUE** <@${message.author.id}> **!!!!!!!!!!!!!!!!!!!!!!!**`);
		}
	},
	{
		name: 'inspiration',
		description: 'Trouver de l\'inspiration',
		usage:	'inspiration',
		aliases: ["inspi"],
		execute(message, args, discord_bot, config) {
			if (Math.random() <= 0.5){
				message.reply("inspiration.exe a cessé de fonctionner")
			}else{
				message.reply("inspiration ici: https://www.instagram.com/writing.prompt.s/?hl=fr")
			}
		}
	},
	{
		name: 'money',
		description: 'Obtenir de l\'argent',
		usage:	'money',
		aliases: [],
		execute(message, args, discord_bot, config) {
			if (message.author.id == '321639963848343563' || message.author.id == '584726955304288257'){
				message.reply("voici votre argent: 💰")
			}else{
				message.reply("TOUCHE PAS A MON ARGENNNNNNTTTT !!!")
			}
		}
	},
	{
		name: 'react',
		description: 'REAGISSONS',
		usage:	'react',
		aliases: [],
		execute(message, args, discord_bot, config, datas) {
			if (message.author.id == '321639963848343563' || message.author.id == '584726955304288257'){
				datas.react = args[0]
			}else{
				message.reply("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON !!!")
			}
		}
	},   
	{
		name: 'cat',
		description: 'Un chat trop mignon',
		usage:	'cat',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			const fetch = require('node-fetch');
			const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
			message.channel.send(file);
		}
	},   
	{
		name: 'pfc',
		description: 'Le puit ça existe pas espèce de singe',
		usage:	'pfc',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			const filter = m => m.author == message.author
			var p = ["Pierre", "Feuille", "Ciseaux"]
			message.reply("azy")
			message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
			.then(collected => message.channel.send(p[getRandomInt(p.length)]))
			.catch(collected => message.channel.send('Tu attends quoi espèce de moule à gauffres ???'));
		}
	},   
	{
		name: 'fakemsg',
		description: 'Faux message',
		usage:	'fakemsg',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			const channel = message.channel;
			var member = getUserFromMention(discord_bot, message, args[0])
			if (member == undefined){
				member = message.guild.members.cache.get(args[0])
			}
			try{message.delete()}catch{}
			var name = member.nickname || member.user.username
			try {
				const webhooks = await channel.fetchWebhooks();
				const webhook = webhooks.first();
				delete args[0]

				await webhook.send(args.join(" "), {
					username: name,
					avatarURL: member.user.avatarURL(),

				});
			} catch (error) {
				console.error('Error trying to send: ', error);
			}
		}
	},
	{
		name: 'crazyfrog',
		description: 'RATATATATATATATA',
		usage:	'crazyfrog',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			const channel = message.channel;
			try{message.delete()}catch{}
			var member = message.member
			var name = member.nickname || member.user.username
			try {
				const webhooks = await channel.fetchWebhooks();
				const webhook = webhooks.first();
				delete args[0]

				await webhook.send("<a:russian_frog_1:759387072967868486><a:russian_frog_2:759387073114931210><a:russian_frog_3:759387086104166451>", {
					username: name,
					avatarURL: member.user.avatarURL(),

				});
			} catch (error) {
				console.error('Error trying to send: ', error);
			}
		},
	},
	{
		name: 'psst',
		description: 'psst',
		usage:	'crazyfrog',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			message.delete()
			message.channel.send("*pssst, " + args[0] + " envoie l'argent ici pour recevoir la marchandise: https://paypal.me/KyloRen3600*")
		},
	}   
]   
	
	