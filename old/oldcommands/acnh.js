function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const ids = {
	fish: 80,
	bugs: 80,
	villagers: 391,
	songs: 95
}

const fetch = require('node-fetch');

function mois(text){
	if (text == ""){return "Toute l'année"}
	text = text.replace("10", "Octobre")
	text = text.replace("11", "Novembre")
	text = text.replace("12", "Décembre")
	text = text.replace("1", "Janvier")
	text = text.replace("2", "Février")
	text = text.replace("3", "Mars")
	text = text.replace("4", "Avril")
	text = text.replace("5", "Mai")
	text = text.replace("6", "Juin")
	text = text.replace("7", "Juillet")
	text = text.replace("8", "Août")
	text = text.replace("9", "Septembre")
	text = text.replace("-", " à ")
	text = text.replace("-", " à ")
	text = text.replace("-", " à ")
	return text
}

function heures(text){
	if (text == ""){return "Tout le temps"}

	text = text.replace("10am", "10h")
	text = text.replace("11am", "11h")
	text = text.replace("12am", "12h")
	text = text.replace("1am", "1h")
	text = text.replace("2am", "2h")
	text = text.replace("3am", "3h")
	text = text.replace("4am", "4h")
	text = text.replace("5am", "5h")
	text = text.replace("6am", "6h")
	text = text.replace("7am", "7h")
	text = text.replace("8am", "8h")
	text = text.replace("9am", "9h")

	text = text.replace("10pm", "10h")
	text = text.replace("11pm", "11h")
	text = text.replace("12pm", "12h")
	text = text.replace("1pm", "1h")
	text = text.replace("2pm", "2h")
	text = text.replace("3pm", "3h")
	text = text.replace("4pm", "4h")
	text = text.replace("5pm", "5h")
	text = text.replace("6pm", "6h")
	text = text.replace("7pm", "7h")
	text = text.replace("8pm", "8h")
	text = text.replace("9pm", "9h")

	text = text.replace("-", "à")
	text = text.replace("-", "à")
	text = text.replace("-", "à")
	return text
}

function location(text){
	if (text == ""){return "Partout"}

	text = text.replace("River", "Rivière")
	text = text.replace("Sea", "Mer")
	text = text.replace("Clifftop", "Falaises")
	text = text.replace("Mouth", "Embouchure")
	text = text.replace("Pond", "Étang")
	text = text.replace("Pier", "Jetée")

	text = text.replace("On the ground", "Sur le sol")
	text = text.replace("On palm trees", "Sur les palmiers")
	text = text.replace("Flying", "Vol")
	text = text.replace("Near trash", "Proche des ordures")
	text = text.replace("On flowers", "Dans les fleurs")
	text = text.replace("Shaking trees", "En secouant les arbres")
	return text
}

function rarete(text){
	text = text.replace("Common", "Commun")
	text = text.replace("Uncommon", "Non commun")

	return text
}

function espece(text){
	text = text.replace("Penguin", "Pingouin")
	text = text.replace("Dog", "Chien")
	text = text.replace("Bird", "Oiseau")
	text = text.replace("Mouse", "Souris")
	text = text.replace("Chicken", "Poulet")
	text = text.replace("Cub", "Ourson")
	text = text.replace("Bear", "Ours")
	text = text.replace("Squirrel", "Ecureil")
	text = text.replace("Kangaroo", "Kangourou")
	text = text.replace("Ostrich", "Autruche")
	text = text.replace("Horse", "Cheval")
	text = text.replace("Monkey", "Cousin de David")
	text = text.replace("Bull", "Taureau")
	text = text.replace("Deer", "Biche")
	text = text.replace("Goat", "Chèvre")
	text = text.replace("Sheep", "Mouton")
	text = text.replace("Rabbit", "Lapin")
	text = text.replace("Frog", "Grenouille")
	text = text.replace("Pig", "Cochon")
	text = text.replace("Gorilla", "Gorille")
	text = text.replace("Duck", "Canard")
	text = text.replace("Eagle", "Aigle")
	text = text.replace("Anteater", "Fourmilier")
	text = text.replace("Tiger", "Tigre")
	text = text.replace("Cat", "Chat")
	text = text.replace("Cow", "Vache")
	text = text.replace("Wolf", "Loup")

	return text
}

function personnalite(text){
	text = text.replace("Normal", "Normale")
	text = text.replace("Peppy", "Energique")
	text = text.replace("Smug", "Chic")
	text = text.replace("Lazy", "Paresseux")
	text = text.replace("Cranky", "Grincheux")
	text = text.replace("Snooty", "Prétencieux")

	return text
}

module.exports = [
	{
		name: 'acnh',
		description: 'Animal Crossing',
		usage:	'acnh fish/bug/song/vil',
		aliases: [],
		async execute(message, args, discord_bot, config) {

			var embed = require('../../app.js').defaultEmbed();
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();

			if (args[0] == "fish" || args[0] == "bug"){
				if (args[0] == "bug"){args[0] = "bugs"}
				var response = await fetch(`https://acnhapi.com/v1/${args[0]}/${getRandomInt(ids[args[0]]) + 1}`).then(response => response.json())
				var name = response.name['name-EUfr'].split(' ')	
				var c = 0
				name.forEach(word => {name[c] = word.charAt(0).toUpperCase() + word.slice(1);c++})
				embed.title = name.join(" ")
				embed.description = "*" + response['catch-phrase'] + "*"
				embed.thumbnail.url = response.icon_uri

				embed.fields.push({
					name: "Nom russe:",
					value: response.name["name-EUru"]
				});

				embed.fields.push({
					name: "Prix de vente:",
					value: `${response.price}🔔`
				});

				embed.fields.push({
					name: "Mois (hémisphère nord):",
					value: mois(response.availability["month-northern"])
				});	

				embed.fields.push({
					name: "Mois (hémisphère sud):",
					value: mois(response.availability["month-southern"])
				});				

				embed.fields.push({
					name: "Heures:",
					value: heures(response.availability["time"])
				});

				embed.fields.push({
					name: "Location:",
					value: location(response.availability["location"])
				});

				embed.fields.push({
					name: "Rareté:",
					value: rarete(response.availability["rarity"])
				});

				embed.image.url = response.image_uri

				message.channel.send({embed: embed});
			}else if (args[0] == "villager" || args[0] == "vil"){
				var response = await fetch(`http://acnhapi.com/v1/villagers/${getRandomInt(ids.villagers)+1}`).then(response => response.json())

				var name = response.name['name-EUfr'].split(' ')	
				var c = 0
				name.forEach(word => {name[c] = word.charAt(0).toUpperCase() + word.slice(1);c++})
				embed.title = name.join(" ")
				//embed.description = "*" + response['catch-phrase'] + "*"
				embed.thumbnail.url = response.icon_uri

				embed.fields.push({
					name: "Nom russe:",
					value: response.name["name-EUru"]
				});
				
				embed.fields.push({
					name: "Anniversaire:",
					value: response.birthday
				});
				
				embed.fields.push({
					name: "Espèce:",
					value: espece(response.species)
				});
				
				embed.fields.push({
					name: "Personnalité:",
					value: personnalite(response.personality)
				});

				embed.image.url = response.image_uri

				message.channel.send({embed: embed});
			}else if (args[0] == "song"){
				var response = await fetch(`http://acnhapi.com/v1/songs/${getRandomInt(ids.songs)+1}`).then(response => response.json())

				var name = response.name['name-EUfr'].split(' ')	
				var c = 0
				name.forEach(word => {name[c] = word.charAt(0).toUpperCase() + word.slice(1);c++})
				embed.title = name.join(" ")
				embed.url = response.music_uri
				
				embed.fields.push({
					name: "Nom russe:",
					value: response.name["name-EUru"]
				});
				
				embed.fields.push({
					name: "Prix d'achat:",
					value: `${response["buy-price"]}🔔`
				});
				
				embed.fields.push({
					name: "Prix de vente:",
					value: `${response["sell-price"]}🔔`
				});

				embed.image.url = response.image_uri

				message.channel.send({embed: embed});

			}else{
				return ["MISSING_ARGUMENT"]
			}
		}
	}
]