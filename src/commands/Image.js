const util = require("util");
const gis = require('g-i-s');

const searchImage = util.promisify(gis);

const {Command} = require("../Command");

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

class Image extends Command {
	constructor(discordBot) {
		super(discordBot, "image", "Rechercher une image", "image <recherche>");
	}

	async execute(message, args, config) {
		if (args.length === 0) return ["MISSING_ARGUMENT"]
		searchImage(args.join(" ")).then((results) => message.reply(results[getRandomInt(results.length)].url)).catch()
	}
}

class Nude extends Command {
	constructor(discordBot) {
		super(discordBot, "nude", "Hum...", "nude");
	}

	async execute(message, args, config) {
		searchImage("R2-D2").then((results) => message.reply(results[getRandomInt(results.length)].url)).catch()
	}
}

module.exports = [Image, Nude]
