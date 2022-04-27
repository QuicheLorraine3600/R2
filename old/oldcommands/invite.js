
module.exports = [
    {
        name: 'invite',
        description: "Permet à Kylo de s'inscruster sur votre serveur",
        usage:	'invite',
        aliases: [],
        async execute(message, args, discord_bot, config) {
            var guilds = discord_bot.guilds.cache
            console.log(guilds)
            guilds.forEach(element => {
                console.log(element)
                console.log(element.name)
                try{
                    element.fetchInvites().then(guildInvites => {
                    console.log(Array.from(guildInvites))
                    message.reply(`${element.name} ${Array.from(guildInvites)[0]}`)
                    })
                }catch{}
                
            })
        }
    }
]    
    