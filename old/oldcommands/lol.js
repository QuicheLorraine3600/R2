function getLeagueIcon(tier, rank){
	if (tier == "IRON"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/03/Season_2019_-_Iron_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Iron_2.png"
		}
		if (rank == "III"){		
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/95/Season_2019_-_Iron_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/70/Season_2019_-_Iron_4.png"
		}
	}
	if (tier == "BRONZE"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f4/Season_2019_-_Bronze_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ac/Season_2019_-_Bronze_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/81/Season_2019_-_Bronze_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5a/Season_2019_-_Bronze_4.png"
		}
	}
	if (tier == "GOLD"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/96/Season_2019_-_Gold_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8a/Season_2019_-_Gold_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a6/Season_2019_-_Gold_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cc/Season_2019_-_Gold_4.png"
		}
	}
	if (tier == "PLATINUM"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/74/Season_2019_-_Platinum_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a3/Season_2019_-_Platinum_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/Season_2019_-_Platinum_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ac/Season_2019_-_Platinum_4.png"
		}
	}
	if (tier == "DIAMOND"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/91/Season_2019_-_Diamond_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/70/Season_2019_-_Diamond_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dc/Season_2019_-_Diamond_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ec/Season_2019_-_Diamond_4.png"
		}
	}
	if (tier == "MASTER"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/11/Season_2019_-_Master_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/95/Season_2019_-_Master_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/46/Season_2019_-_Master_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/01/Season_2019_-_Master_4.png"
		}
	}
	if (tier == "GRANDMASTER"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/76/Season_2019_-_Grandmaster_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/58/Season_2019_-_Grandmaster_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f6/Season_2019_-_Grandmaster_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/42/Season_2019_-_Grandmaster_4.png"
		}
	}
	if (tier == "CHALLENGER"){
		if (rank == "I"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png"
		}
		if (rank == "II"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/29/Season_2019_-_Challenger_2.png"
		}
		if (rank == "III"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e0/Season_2019_-_Challenger_3.png"
		}
		if (rank == "IV"){
			return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Season_2019_-_Challenger_4.png"
		}
	}
}

function leagueParser(tier, rank){
	tier = tier.toLowerCase()
	var l = tier.split("")
	l[0] = l[0].toUpperCase()
	tier = l.join("")

	if (rank == "I"){
		return [tier, 1, ]
	}else if (rank == "II"){
		return [tier, 2]	
	}else if (rank == "III"){
		return [tier, 3]
	}else if (rank == "IV"){
		return [tier, 4]
	}
}

module.exports = [
	{
		name: 'lol',
		description: 'Pas besoin de desc, ça ma fait déjà suffisamment mal aux boulons',
		usage:	'lol <joueur>',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			if (args[0] != undefined){
				var embed = datas.utils.defaultEmbed();
				const lol = datas.lol
				const Constants = datas.lol.Constants
				
				var user
				try{
					user = await lol.Summoner.getByName(args.join(" "), Constants.Regions.EU_WEST)
				}catch{
					embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
					embed.title = message.content;
					embed.color = 0xff0000;
					embed.description = `Loleur **${args[0]}** non trouvé ! :frowning:\n*Note: seule la localisation EU_W est supportée !*`;
					message.channel.send({embed: embed});
					return	
				}
				
				user = user.response

				var league = await lol.League.bySummoner(user.id, Constants.Regions.EU_WEST)
				league = league.response[0]

				var games = await lol.Match.list(user.accountId, Constants.Regions.EU_WEST)
				games = games.response

				embed.title = "Information du Loleur:"

				embed.author.name = user.name; embed.author.icon_url = `https://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/${user.profileIconId}.png`
				embed.footer.text = "Dernière connexion:"
				embed.timestamp = user.revisionDate


				
				if (user.name == "KyloRen3600"){
					embed.url = "https://paypal.me/KyloRen3600"
					embed.description = "\"Meilleur joueur LOL de la galaxie\""
					embed.thumbnail.url = "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png"
					embed.fields.push({
						name: "Niveau:",
						value: 3600
					});
					embed.fields.push({
						name: "Nombre de matchs:",
						value: 3600
					});
					embed.fields.push({
						name: "League:",
						value: "Challenger I"
					});	
					embed.fields.push({
						name: "Victoires classées:",
						value: "Beaucoup trop"
					});	
					embed.fields.push({
						name: "Défaites classées:",
						value: "Invincible"
					});	
					embed.fields.push({
						name: "Informations sur le dernier match:",
						value: `${config.prefix}lolmatch 3600`
					});
					message.channel.send({embed: embed});
					return
				}

				if (user.name == "ryncevent"){embed.description = "Dota c'est mieux"}

				embed.fields.push({
					name: "Niveau",
					value: user.summonerLevel
				});
				embed.fields.push({
					name: "Nombre de matchs:",
					value: games.totalGames
				});
				if (league == undefined){
					embed.thumbnail.url = "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/38/Season_2019_-_Unranked.png"
					embed.fields.push({
						name: "League:",
						value: "Non classé"
					});		
				}else{
					var leagueParsed = leagueParser(league.tier, league.rank)
					embed.thumbnail.url = getLeagueIcon(league.tier, league.rank)
					embed.fields.push({
						name: "League:",
						value: `${leagueParsed[0]} ${league.rank}`
					});	
					embed.fields.push({
						name: "Victoires classées:",
						value: league.wins
					});	
					embed.fields.push({
						name: "Défaites classées:",
						value: league.losses
					});	
				}

				try{
				embed.fields.push({
					name: "Informations sur le dernier match:",
					value: `Faites \"${config.prefix}lolmatch ${games.matches[0].gameId}\"`
				});}catch{}

				message.channel.send({embed: embed});
			
			}else{
				return ["MISSING_ARGUMENT"]
			}
		}
	},
	{
		name: 'lolmatch',
		description: 'Pas besoin de desc, ça ma fait déjà suffisamment mal aux boulons',
		usage:	'lol <match>',
		aliases: [],
		async execute(message, args, discord_bot, config, datas) {
			if (args[0] != undefined){
				var embed = datas.utils.defaultEmbed();
				embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
				const lol = datas.lol
				const Constants = datas.lol.Constants

				if (args[0] == 3600){
					var timestamp = ""
					embed.title = "Information sur le match:"
					embed.footer.text = "Date de début:"
					embed.timestamp = timestamp
					embed.footer.icon_url = "https://external-preview.redd.it/FTMkIMnMhnqxCtx-8wlu1wzQaH1UFcA9CaZ3TugXviA.png?auto=webp&s=df74aa3b8d84538bc6a8253a47a7677d903861b0"
	
					embed.description = `*Id 3600*`
	
					embed.fields.push({
						name: "Mode:",
						value: 'Battle Royale'
					});	
					embed.fields.push({
						name: "Map:",
						value: "Death Star"
					});	
					embed.fields.push({
						name: "Saison:",
						value: 20
					});	
					embed.fields.push({
						name: "Durée:",
						value: "30 secondes"
					});	

					embed.fields.push({
						name: "Equipe gagnante:",
						value: '1 (EZ)'
					});

					var embeds = []
					embeds.push(datas.utils.defaultEmbed())
					embeds.push(datas.utils.defaultEmbed())
	
					var i = 0
					embeds.forEach(e =>{
						e.description = `*Id 3600*`
						e.author.name = message.author.username; e.author.icon_url = message.author.avatarURL();
						e.title = `Informations sur la team ${i + 1}:`
						e.footer.text = "Date de début:"
						e.timestamp = timestamp
						e.footer.icon_url = "https://external-preview.redd.it/FTMkIMnMhnqxCtx-8wlu1wzQaH1UFcA9CaZ3TugXviA.png?auto=webp&s=df74aa3b8d84538bc6a8253a47a7677d903861b0"
						if (i==0){
							e.fields.push({
								name: "Dragons tués:",
								value: "BEAUCOUP TROP (EZ)"
							});
							e.fields.push({
								name: "Tours détruites:",
								value: "TOUTES (EZ)"
							});
						}else{
							e.fields.push({
								name: "Dragons tués:",
								value: "AUCUN (NUL, NUL, NUUUUUUUUUUUUL)"
							});
							e.fields.push({
								name: "Tours détruites:",
								value: "AUCUNE (NUL, NUL, NUUUUUUUUUUUUL)"
							});							
						}


						i++			
					});
	
					var teams = [[{name: "KyloRen3600", champion: "Kylo Ren", kda: "3600/0/0"}], []]

					var names = ["Kristal100", "ryncevent", "Broco Lee", "explosus8", "Sardoche"]
					names.forEach(async function(player){
						const {
							response: {
							id
							}
						} = await lol.Summoner.getByName(player, Constants.Regions.EU_WEST)
						try{
						var champion = await lol.Champion.masteryBySummoner(id, Constants.Regions.EU_WEST)
						}catch {console.log(player)}
						champion = champion.response[0]
						champion = await lol.DataDragon.getChampion(champion.championId)
						if (player == "Sardoche"){
							teams[1].push({
								name: player,
								champion: champion.name,
								kda: "0/0/0 (A DESINSTALLE LOL !!!)"	
							})
							embeds[1].image.url = "https://pbs.twimg.com/media/ED7yvJmXYAE3GmC.png"
							var i = 0
							teams.forEach(team => {
								team.forEach(player => {
									embeds[i].fields.push({
										name: player.name + ":",
										value: `Champion: ${player.champion}\nK/D/A: ${player.kda}`
									});	
								})
								i++				
							})
			
							message.channel.send({embed: embed});
							message.channel.send({embed: embeds[0]});
							message.channel.send({embed: embeds[1]});
							
						}else{
							teams[1].push({
								name: player,
								champion: champion.name,
								kda: "0/0/0 (NUUUUUUUUUUUUUUUUUUUUUUUUUL)"	
							})
						}
					})
				}else{
					var match
					try{
						match = await lol.Match.get(args[0], Constants.Regions.EU_WEST)
					}catch{				
						embed.title = message.content;
						embed.color = 0xff0000;
						embed.description = `Partie **${args[0]}** non trouvée ! :frowning:\n*Note: seule la localisation EU_W est supportée !*`;
						message.channel.send({embed: embed});
						return	
					}
					
					match = match.response
	
					embed.title = "Information sur le match:"
					embed.footer.text = "Date de début:"
					embed.timestamp = match.gameCreation
					embed.footer.icon_url = "https://external-preview.redd.it/FTMkIMnMhnqxCtx-8wlu1wzQaH1UFcA9CaZ3TugXviA.png?auto=webp&s=df74aa3b8d84538bc6a8253a47a7677d903861b0"
	
					var map
					var maps = datas.lol.maps
					maps.forEach(m => {
						if (match.mapId == m.mapId){map = m}
					})
	
	
					embed.description = `*Id ${match.gameId}*`

					embed.fields.push({
						name: "Mode:",
						value: match.gameMode.toLowerCase()
					});	
					embed.fields.push({
						name: "Map:",
						value: map.mapName
					});	
					embed.fields.push({
						name: "Saison:",
						value: match.seasonId
					});	
					embed.fields.push({
						name: "Durée:",
						value: `${match.gameDuration/60} minutes`
					});	
	
					var embeds = []
					embeds.push(datas.utils.defaultEmbed())
					embeds.push(datas.utils.defaultEmbed())
	
					var i = 0
					embeds.forEach(e =>{
						e.description = `*Id ${match.gameId}*`
						e.author.name = message.author.username; e.author.icon_url = message.author.avatarURL();
						e.title = `Informations sur la team ${i + 1}:`
						e.footer.text = "Date de début:"
						e.timestamp = match.gameCreation
						e.footer.icon_url = "https://external-preview.redd.it/FTMkIMnMhnqxCtx-8wlu1wzQaH1UFcA9CaZ3TugXviA.png?auto=webp&s=df74aa3b8d84538bc6a8253a47a7677d903861b0"
						e.fields.push({
							name: "Dragons tués:",
							value: match.teams[i].dragonKills
						});
						e.fields.push({
							name: "Tours détruites:",
							value: match.teams[i].towerKills
						});
						if (match.teams[i].win){
							embed.fields.push({
								name: "Equipe gagnante:",
								value: match.teams[i].teamId/100
							});	
						}
						i++			
					})
	
					var teams = [[], []]
					for (var i = 0; i<=9; i++){
						var champion = await lol.DataDragon.getChampion(match.participants[i].championId)			
						teams[match.participants[i].teamId/100-1].push({
							name: match.participantIdentities[i].player.summonerName,
							champion: champion.name,
							kda: `${match.participants[i].stats.kills}/${match.participants[i].stats.deaths}/${match.participants[0].stats.assists}`
						})
					}
	
					var i = 0
					teams.forEach(team => {
						team.forEach(player => {
							embeds[i].fields.push({
								name: player.name + ":",
								value: `Champion: ${player.champion}\nK/D/A: ${player.kda}`
							});	
						})
						i++				
					})
	
					message.channel.send({embed: embed});
					message.channel.send({embed: embeds[0]});
					message.channel.send({embed: embeds[1]});
				}			
			}else{
				return ["MISSING_ARGUMENT"]
			}
		}
	}
]