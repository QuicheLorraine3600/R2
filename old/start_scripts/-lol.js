module.exports = [
	{
		async execute(discord_bot, config, datas) {
			const Constants = require("twisted").Constants			
			const LolApi = new require("twisted").LolApi
			const lol = new LolApi({key: "RGAPI-e973d0cf-a700-4c07-b70b-d17c7de74abb"})
			datas.lol = lol
			datas.lol.Constants = Constants
			datas.lol.maps = await lol.DataDragon.getMaps()
		}
	}
]