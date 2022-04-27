function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const sardoche = [
	"sardoche/BANDEDESINGES.mp4", 
	"sardoche/ILSSONTTROPCONS.mp4", 
	"sardoche/letsgo.mp4", 
	"sardoche/CABUG.mp4", 
	"sardoche/jenairasleculdetesconneries.mp4",
	"sardoche/jailedroit.mp4",
	"sardoche/QUEST_CE_QUE_JAI_FAIT_POUR_MERITER_CA.mp4",
	"sardoche/PI.mp4",
	"sardoche/JEANNE.mp4",
	"sardoche/YAAAAAAAA.mp4",
	"sardoche/POURQUOI.mp4",
	"sardoche/LOL.mp4",
	"sardoche/SAL.mp4",
	"sardoche/commander.mp4",
	"sardoche/wowowowo.mp4"

]

const sardoche_faces = [
	"https://www.ladn.eu/wp-content/uploads/2019/10/sad.jpg",
	"https://pbs.twimg.com/media/ED7yvJmXYAE3GmC.png", 
	"https://pbs.twimg.com/media/EHBeweNX0AI4KAf.jpg", 
	"https://pbs.twimg.com/media/ECKNd23XsAEAbXS.jpg", 
	"https://pbs.twimg.com/ext_tw_video_thumb/1165016059524632576/pu/img/h3Iru2slqds6a2Ld.jpg",
	"https://i.ytimg.com/vi/dovi-M2gg3c/maxresdefault.jpg",
	"https://static-cdn.jtvnw.net/jtv_user_pictures/sardoche-profile_image-96730a1ede6486f7-300x300.png",

]


module.exports = [
	{
		name: 'sardoche',
		description: 'SARDOCHEEEEEEEE',
		usage:	'sardoche',
		aliases: [],
		execute(message, args, discord_bot, config) {
	
			var embed = require('../../app.js').defaultEmbed();
			embed.author.name = message.author.username; embed.author.icon_url = message.author.avatarURL();
			
			if (message.channel.type !== 'text') return;
	
			const voiceChannel = message.member.voice.channel;
	
			if (!voiceChannel) {
				return message.reply('merci de rejoindre un salon vocal...');
			}
	
			embed.title = "Lecture d'une vidéo de Sardoche"
			embed.description = "Merci à David pour son aide <3"
			embed.image.url = sardoche_faces[getRandomInt(sardoche_faces.length)]
			message.channel.send({embed: embed});
			voiceChannel.join().then(connection => {
				var file = sardoche[getRandomInt(sardoche.length)]
				connection.play(file);
			});
		}
	}
]