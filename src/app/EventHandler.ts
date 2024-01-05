import { ActivityType, Events, TextChannel } from "discord.js";

import Bot from "./Bot"
import logger from "./modules/Logger";

import { loadMessagesFromDB, registerChannelCronTask } from "./modules/CronScheduler"
import { getDailyQuote, getEmbedOfQuote } from "./modules/QuoteAPI";


import { SOUNDBOARD_SERVER } from "./modules/SoundBoard/SoundBoardServer"

export default class EventHandler {
	constructor(bot: Bot) {
		bot.client.once(Events.ClientReady, c => {
			logger.info(`Ready! Logged in as ${c.user.tag}`);

			bot.client.user?.setActivity({
				name: "Star Wars IX",
				type: ActivityType.Watching
			})

			loadMessagesFromDB(bot)

			// Our beloved daily quote at 7 am
			registerChannelCronTask(bot, "670966543542386708", "727952301527924796", "0 7 * * *", (channel) => {
				if (channel instanceof TextChannel) {
					getDailyQuote().then(quote => {
						getEmbedOfQuote(quote).then(embed => {
							channel.send({ content: ":alarm_clock: Debout les loulous ! :muscle::chart_with_upwards_trend:", embeds: [embed] })
						})
					})
				}
			})

			const port = (process.env.SOUNDBOARD_PORT ?? 8080) as number
			SOUNDBOARD_SERVER.start(port)
		});
	}
}