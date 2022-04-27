function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var p = [
	"RECHERCHE DANS LA BASE DE DONNEES DE LA NSA",
	"RECHERCHE DANS LA BASE DE DONNEES DE LA NASA",
	"RECHERCHE DANS LA BASE DE DONNEES DE LA CIA",
	"RECHERCHE DANS LA BASE DE DONNEES DU FBI",
	"RECHERCHE DANS LA BASE DE DONNEES DU KGB",
	"RECHERCHE DANS LA BASE DE DONNEES DU GUOANBU",
	"RECHERCHE DANS LA BASE DE DONNEES DU MOSSAD",
	"RECHERCHE DANS LES ARCHIVES IMPERIALES",
	"RECHERCHE DANS LA BASE DE DONNEES DES FIP",
	"RECHERCHE DANS LA CONV CAMILLE-MARINE",
	"RECHERCHE DANS LA BASE DE DONNEES DU BROCO BOT",
	"RECHERCHE DANS LA BASE DE DONNEES DE BOBSLEIGH STUDIOS",
	"RECHERCHE DANS LES ARCHIVES PLUTONIENNES",
	"RECHERCHE DANS LA BASE DE DONNES DU SHIELD",
	"RECHERCHE DANS LA BASE DE DONNES DU MI6"
]

module.exports = [
	{
		name: 'image',
		description: 'Rechercher une image dans la base de données d\'R2',
		usage:	'image <recherche>',
		aliases: [],
		execute(message, args, discord_bot, config) {
			if (args[0] != undefined){
				message.reply(p[Math.floor(Math.random() * p.length)])
				var gis = require('g-i-s');
				gis(args.join(" "), (error, results) => {
				if (error) {
					console.log(error);
				}
				else {
					try{message.reply(results[getRandomInt(0, results.length)].url);}catch{}
				}
				});
			}else{
				return ["MISSING_ARGUMENT"]
			}		
		}
	},
	{
		name: 'nudes',
		description: 'T ES UN DETRAQUE MA PAROLE',
		usage:	'nudes',
		aliases: [],
		execute(message, args, discord_bot, config) {

			var gis = require('g-i-s');
			gis('R2-D2', (error, results) => {
			if (error) {
				console.log(error);
			}
			else {
				try{message.reply(results[getRandomInt(0, results.length)].url);}catch{}
			}
			});

				
		}
	}
]