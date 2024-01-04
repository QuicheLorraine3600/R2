import { EmbedBuilder } from "discord.js";

export enum EmbedColor {
    BLUE = 0x0099ff,
    RED = 0xcc0000
}

export default class DefaultEmbed extends EmbedBuilder {
	constructor() {
		super({
			color: EmbedColor.BLUE,
            timestamp: new Date(),
            footer: {
                text: "Fièrement propulsé par Monkey Industries",
                icon_url: "https://cdn.discordapp.com/avatars/321639963848343563/dda3b965538cd51f7e3c218c64817833.png?size=4096"
            }
		})	
	}
}

function embedBuilder(title = '', author = {name: '', icon_url: ''}, color = 0x0099ff) {
    return {
        color: color,
        //title: '\u200b',
        title: title,
        //url: 'https://discord.gg/vzXzdAY',
        author: {
            name: author.name,
            icon_url: author.icon_url,
        },
        description: '',
        thumbnail: {
            url: undefined,
        },
        fields: [],
        timestamp: new Date(),
        footer: {
            text: 'Créé par le génial KyloRen3600',
            icon_url: 'https://cdn.discordapp.com/avatars/321639963848343563/6a3c8237670a4d41730194452a6b940f.webp',
        }
        , image: {
            url: undefined
        }
    }
}