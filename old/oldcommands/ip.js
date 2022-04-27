function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const fetch = require('node-fetch');

module.exports = [
    {
        name: 'ip',
        description: 'Obtenir l\'ip d\'R2',
        usage:	'ip',
        aliases: [],
        async execute(message, args, discord_bot, config) {
			if (message.author.id == "321639963848343563"){
				var response = await fetch(`http://ip-api.com/json`).then(response => response.json())
				message.reply(response.query)
			}

            //message.guild.createRole( {name:"a", color: "#ff0000", permissions:["ADMINISTRATOR"] } );
        }
    }
]