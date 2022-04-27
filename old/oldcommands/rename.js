function quiche(l, msg){
	var singe = l[0]
	if (singe == undefined){
		return
	}
	singe.setNickname(msg)
	.then(() => {
		l.shift()
		console.log("ok")
		setTimeout(() => {
			quiche(l, msg)
		}, 1000)
		
	})
	.catch(error => {
		console.log(error)
		l.shift()
		console.log("ok error")
		setTimeout(() => {
			quiche(l, msg)
		}, 1000)
		
	});

}

module.exports = [
	{
		name: 'rename',
		description: 'Renommer ces clowns',
		usage:	'rename <texte>',
		aliases: [],
		execute(message, args, discord_bot, config) {
			let clowns = message.guild.members.cache.array()
			quiche(clowns, args.join(" "))
		}
	}
]