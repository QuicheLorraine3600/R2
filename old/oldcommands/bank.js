function getUserFromMention(client, mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

function displayBalance(banker, users, bank, title){
	var embed = require('../../app.js').defaultEmbed();
	embed.author.name = banker.username; embed.author.icon_url = banker.avatarURL();
	embed.title = title
	users.forEach(user => {
		if (bank[user.id] != undefined && bank[user.id].balance != 0){
			embed.fields.push({name: `**__Solde de ${user.username}:__**`, value: `${bank[user.id].balance} ℙ`, inline: false})
		}else{
			embed.fields.push({name: `**__Solde de ${user.username}:__**`, value: "N'A PAS D'ARGEEEEEEEEEENT", inline: false})
		}
	});
	return embed
}



function addToAccount(bank, id, username, amount){
	if (bank[id] == undefined){
		bank[id] = {
			username: username,
			balance: amount
		}
	}else{
		bank[id].username = username
		bank[id].balance += amount	
	}
}

module.exports = 
[
	{
		name: 'bank',
		description: 'Regarder un compte en banque',
		usage:	'bank <mention>',
		aliases: [],
		execute(message, args, discord_bot, config, datas) {
			var bank = datas.bank
			if (datas.permissions.bankers.includes(message.author.id)){
				var user = getUserFromMention(discord_bot, args[0])
				if (user == undefined){
					if (bank[args[0]] != undefined){
						user = {
							username: bank[args[0]].username,
							id: args[0]
						}
					}
				}
				if (user != undefined || args[0] == ""){
					message.channel.send({embed: displayBalance(message.author, [user], bank, "Consultation de compte")});
					return
				}
			}message.channel.send({embed: displayBalance(message.author, [message.author], bank, "Consultation de compte")});
		}
	},
	{
		name: 'give',
		description: 'Donner de l\'argent',
		usage:	'give <mention> <montant>',
		aliases: [],
		execute(message, args, discord_bot, config, datas) {
			var bank = datas.bank
			if (datas.permissions.bankers.includes(message.author.id)){
				var amount = parseInt(args[1], 10);
				if (!isNaN(amount)){
					var user = getUserFromMention(discord_bot, args[0])
					if (user == undefined){
						if (bank[args[0]] != undefined){
							user = {
								username: bank[args[0]].username,
								id: args[0]
							}
						}
					}
					if (user != undefined){
						addToAccount(bank, user.id, user.username, amount)
						addToAccount(bank, "B.I.", "Banque Impériale", -1 * amount)
						message.channel.send({embed: displayBalance(message.author, [user], bank, "Don effectué !")});
					}else{
						return ["MISSING_ARGUMENT"]
					}
				}else{
					return ["MISSING_ARGUMENT"]
				}
			}else{
				return ["MISSING_PERMISSION"]
			}
		}
	},
	{
		name: 'transfer',
		description: 'Donner de l\'argent',
		usage:	'give <source> <cible> <montant>',
		aliases: [],
		execute(message, args, discord_bot, config, datas) {
			var bank = datas.bank
			if (args.length >= 3){
				if (datas.permissions.bankers.includes(message.author.id)){
					var amount = parseInt(args[2], 10);
					if (!isNaN(amount)){
						var source = getUserFromMention(discord_bot, args[0])
						var target = getUserFromMention(discord_bot, args[1])
						if (source == undefined){
							if (bank[args[0]] != undefined){
								source = {
									username: bank[args[0]].username,
									id: args[0]
								}
							}
						}
						if (target == undefined){
							if (bank[args[1]] != undefined){
								target = {
									username: bank[args[1]].username,
									id: args[1]
								}
							}
						}
						if (source != undefined && target != undefined){
							addToAccount(bank, source.id, source.username, -1 * amount)
							addToAccount(bank, target.id, target.username, amount)
							message.channel.send({embed: displayBalance(message.author, [source, target], bank, "Transfert effectué !")});
						}else{
							return ["MISSING_ARGUMENT"]
						}
					}else{
						return ["MISSING_ARGUMENT"]
					}
				}else{
					return ["MISSING_PERMISSION"]
				}
			}else{
				var amount = parseInt(args[1], 10);
				if (!isNaN(amount)){
					var source = message.author
					var target = getUserFromMention(discord_bot, args[0])
					if (target == undefined){
						if (bank[args[0]] != undefined){
							target = {
								username: bank[args[0]].username,
								id: args[0]
							}
						}
					}
					if (source != undefined && target != undefined){
						addToAccount(bank, source.id, source.username, -1 * amount)
						addToAccount(bank, target.id, target.username, amount)
						message.channel.send({embed: displayBalance(message.author, [source, target], bank, "Transfert effectué !")});
					}else{
						return ["MISSING_ARGUMENT"]
					}
				}else{
					return ["MISSING_ARGUMENT"]
				}			
			}

		}
	}
];