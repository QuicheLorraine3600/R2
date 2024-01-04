import cron from "node-cron"

import { DB } from "../modules/Database";
import sendWebhookMessageToChannel from "../utils/WebhookMessage"
import Bot from "../Bot";
import { Guild, GuildBasedChannel, TextChannel } from "discord.js";
import logger from "./Logger";

export function registerCronTask(cronExpression: string, task: () => void) {
	cron.schedule(cronExpression, task)
}

export function registerGuildCronTask(bot: Bot, guildId: string, cronExpression: string, task: (g: Guild) => void) {
	registerCronTask(cronExpression, () => {
		bot.client.guilds.fetch(guildId).then(guild => {
			task(guild)
		}).catch(error => {})
	})
}

export function registerChannelCronTask(bot: Bot, guildId: string, channelId: string, cronExpression: string, task: (c: GuildBasedChannel) => void) {
	registerGuildCronTask(bot, guildId, cronExpression, (guild) => {
		guild.channels.fetch(channelId).then(channel => {
			if (channel) task(channel)
		}).catch(error => {})
	})
}


export interface ScheduledMessage {
	cron: string,
	guildId: string,
	channelId: string,
	message: string,
	author: string,
	avatar: string
}

function scheduleMessage(bot: Bot, scheduledMessage: ScheduledMessage) {
	registerChannelCronTask(bot, scheduledMessage.guildId, scheduledMessage.channelId, scheduledMessage.cron, (channel) => {
		if (channel instanceof TextChannel) {
			logger.info("Message sent !")
			sendWebhookMessageToChannel(channel, scheduledMessage.author, scheduledMessage.avatar, scheduledMessage.message).catch(error => {})
			// channel.send(scheduledMessage.message).catch(error => {})
		}
	})
}

export function loadMessagesFromDB(bot: Bot) {
	DB.serialize(() => {			
		DB.each("SELECT * FROM scheduled_messages", (err, scheduledMessage: ScheduledMessage) => {
			scheduleMessage(bot, scheduledMessage)
		});
	});
}

export function registerScheduledMessage(bot: Bot, scheduledMessage: ScheduledMessage) {
	scheduleMessage(bot, scheduledMessage)
	DB.serialize(() => {
		const stmt = DB.prepare("INSERT INTO scheduled_messages (cron, guildId, channelId, message, author, avatar) VALUES (?, ?, ?, ?, ?, ?)");			
		stmt.run(scheduledMessage.cron, scheduledMessage.guildId, scheduledMessage.channelId, scheduledMessage.message, scheduledMessage.author, scheduledMessage.avatar)		
	});
}