const {Command} = require("../Command");
const {WebhookMessage} = require("../WebhookMessage");

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

class CrazyFrog extends Command {

	constructor(discordBot) {
		super(discordBot, "crazyfrog", "TARATATATATATATATA", "crazyfrog");
	}

	async execute(message, args, config) {
		try{ message.delete() } catch{}
		await WebhookMessage.sendMessageToChannelWithMember(this._discordBot, message.channel, message.member, "<a:russian_frog_1:759387072967868486><a:russian_frog_2:759387073114931210><a:russian_frog_3:759387086104166451>")
	}
}

class FakeMessage extends Command {

	constructor(discordBot) {
		super(discordBot, "fakemsg", "Envoyer un faux message", "send <guignol>");
	}

	async execute(message, args, config) {

		let targetedMember = getUserFromMention(this._discordBot, message, args[0])
		if (targetedMember === undefined){
			targetedMember = message.guild.members.cache.get(args[0])
		}

		try { message.delete() } catch {}

		delete args[0]
		await WebhookMessage.sendMessageToChannelWithMember(this._discordBot, message.channel, targetedMember, args.join(" "))
	}
}

class Remorquer extends Command {
	constructor(discordBot) {
		super(discordBot, "remorquer", "Remorquer quelqu'un", "remorquer <singe>");
	}

	async execute(message, args, config) {

		if (args.length === 0) {
			message.reply(`**<@${message.author.id}>** remorque **<@${message.author.id}>** !!!!`)
			return
		}

		if (Math.random() < 0.5) {
			message.reply(`**<@${message.author.id}>** remorque **${args.join(" ")}** !!!!`)
		} else {
			message.reply(`**${args.join(" ")}** remorque **<@${message.author.id}>** !!!!`)
		}
	}
}

module.exports = [CrazyFrog, FakeMessage, Remorquer]