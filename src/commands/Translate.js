const {Command} = require("../Command");
const {WebhookMessage} = require("../WebhookMessage");

const translate = require("googletrans").default;

class Translate extends Command {

	constructor(discordBot) {
		super(discordBot, "ru", "Parler en RUSSE", "ru <message>");
	}

	async execute(message, args, discord_bot, config) {
		if (args.length === 0) return ["MISSING_ARGUMENT"]
		message.delete();
		translate(args.join(" "), { from: "fr", to: "ru" }).then((res) => {
			WebhookMessage.sendMessageToChannelWithMember(this._discordBot, message.channel, message.member, res.text);
		})
	}

}

module.exports = [Translate]