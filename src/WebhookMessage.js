class WebhookMessage {

	#webhook;
	#channel;
	#username;
	#avatarURL;
	content;

	constructor(webhook, channel, username, avatarURL, content) {
		this.#webhook = webhook;
		this.#channel = channel;
		this.#username = username;
		this.#avatarURL = avatarURL;
		this.content = content;
	}

	async send(failedBefore = false) {
		this.#webhook.send({
			content: this.content,
			username: this.#username,
			avatarURL: this.#avatarURL,
		}).catch(() => {
			if (failedBefore) return;
			this.#channel.createWebhook('R2')
				.then(webhook => {
					this.#webhook = webhook;
					this.send(true)
				})
				.catch();
		});
	}

	static async sendMessageToChannel(discordBot, channel, username, avatarURL, content) {
		const webhooks = await channel.fetchWebhooks();
		if (webhooks.size === 0) return;
		let webhook;
		for (const w of webhooks) {
			if (w[1].owner.id === discordBot.user.id) {
				webhook = w[1];
				break;
			}
		}
		if (webhook === undefined) {
			channel.createWebhook('R2')
				.then(async w => {
					webhook = w;
					await new WebhookMessage(webhook, channel, username, avatarURL, content).send();
				})
				.catch();
		} else {
			await new WebhookMessage(webhook, channel, username, avatarURL, content).send();
		}
	}

	static async sendMessageToChannelWithMember(discordBot, channel, member, content) {
		await this.sendMessageToChannel(discordBot, channel, member.nickname || member.user.username, member.user.avatarURL(), content)
	}
}

module.exports = { WebhookMessage }