function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = [
    {
        name: 'hack',
        description: 'Obtenir les permissions admin',
        usage:	'hack',
        aliases: [],
        execute(message, args, discord_bot, config) {
            message.reply("TU AS OBTENUES LES PERMISSIONS ADMINS !!! (ah non en fait)")
            //message.guild.createRole( {name:"a", color: "#ff0000", permissions:["ADMINISTRATOR"] } );
        }
    },
    {
        name: 'coup',
        description: 'Faire un coup d\'état',
        usage:	'coup d\'état',
        aliases: [],
        execute(message, args, discord_bot, config) {
            if (message.content == ";coup d'état catapulte" || message.content == ",coup d'etat catapulte"){
                message.reply("Pour des raisons de sécurité, le mot de passe a été transféré ici: https://paypal.me/KyloRen3600")
                //message.guild.setName("COUP D ETAT !!!")
                //message.guild.setIcon("https://i.pinimg.com/originals/fe/0c/fc/fe0cfcdd31fbe90e32778bd6463bf6ad.png")
            //	for (var i=0;i<5;i++){
            //		message.channel.send("@everyone COUP D ETAT !!!")
            //	}	
            }else if (message.content == ";coup d'état https://paypal.me/KyloRen3600" || message.content == ",coup d'état https://paypal.me/KyloRen3600"){
                message.guild.setName("COUP D ETAT !!!")
                message.guild.setIcon("https://i.pinimg.com/originals/fe/0c/fc/fe0cfcdd31fbe90e32778bd6463bf6ad.png")
            }else{
                var txt = ["Je vais te remorquer !", "Je vais te goumer !", "Espèce de singe !", "Chacripant !", "Va te faire remorquer !", "Tu vas me servir de casse-croûte !", `c'est "catapulte"`]
                message.reply("Mot de passe incorrect ! " + txt[getRandomInt(txt.length)])
            }
    
        }
    },
    {
        name: 'repair',
        description: 'Réparer les conneries',
        usage:	'repair',
        aliases: [],
        execute(message, args, discord_bot, config) {
            if (message.author.id == '321639963848343563' || message.author.id == '584726955304288257'){
                message.guild.setName("Empire Plutonien")
                message.guild.setIcon("https://cdn.discordapp.com/attachments/721292152830820395/734766414275149834/pluton.webp")
            }
        }
    },
    {
        name: 'inutile',
        description: 'Commande inutile n°1',
        usage:	'inutile',
        aliases: [],
        execute(message, args, discord_bot, config) {
            if (message.author.id == '321639963848343563' || message.author.id == '584726955304288257'){
                var member = message.guild.members.cache.get(message.author.id)
                member.roles.add("702468443441725520")
                //message.guild.roles.cache.get('672842623978831923').setPermissions(['SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'MANAGE_CHANNELS'])
                //.then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
                //.catch(console.error);
            }
        }
    }
]