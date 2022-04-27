function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = [
    {
        name: 'random',
        description: "Obtenir un nombre aléatoire",
        usage:	'random <min> <max>',
        aliases: [],
        execute(message, args, discord_bot, config) {
            if (args[0] != undefined && args[1] != undefined){
                message.reply(`vous avez obtenu **${getRandomInt(args[0], args[1])}**.`);
            }else{
                return ["MISSING_ARGUMENT"]
            }
            
        }
    }
]    
    