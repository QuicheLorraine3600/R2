module.exports = [
	{
		name: 'translate',
		description: 'Traduire un message',
		usage:	'translate <message>',
		aliases: ["ru"],
		async execute(message, args, discord_bot, config) {
			const translate = require('@k3rn31p4nic/google-translate-api');
			const channel = message.channel;
			var member = message.member

			translate(args.join(" "), { from: 'fr', to: 'ru' }).then(async function(res){
				try{message.delete()}catch{}
				var name = member.nickname || member.user.username
				try {
					const webhooks = await channel.fetchWebhooks();
					const webhook = webhooks.first();
					delete args[0]
	
					await webhook.send(res.text, {
						username: name,
						avatarURL: member.user.avatarURL(),
	
					});
				} catch (error) {
					console.error('Error trying to send: ', error);
				}
			});
		}
	}
]	
	