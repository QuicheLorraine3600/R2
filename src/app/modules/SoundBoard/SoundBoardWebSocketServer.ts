import WebSocket from "ws";
import http from "http";

import { AudioPlayer, createAudioResource, StreamType } from "@discordjs/voice";
import { SOUNDBOARD_SERVER } from "./SoundBoardServer";
import { Sound } from "./SoundManager";

import play from "play-dl"

export default class SoundBoardWebSocketServer {

	public readonly wss: WebSocket.Server<typeof WebSocket, typeof http.IncomingMessage>

	constructor(httpServer: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>, audioPlayer: AudioPlayer) {
		this.wss = new WebSocket.Server({ server: httpServer, path: "/soundboardsocket" });

		this.wss.on('connection', ws => {
			ws.on('error', console.error);
		
			ws.on('message', async function message(data) {
				const message = JSON.parse(data.toString())
				if (message.type === "PlaySound" && message.soundId) {

					// https://github.com/play-dl/play-dl
					// let stream = await play.stream("https://www.youtube.com/watch?v=Zrly3QMUhoo")
					// console.log(stream)
					// const resource = createAudioResource(stream.stream, {
					// 	inputType: stream.type
					// })
					const resource = createAudioResource("./public/sounds/" + SOUNDBOARD_SERVER.soundMap[message.soundId].src, {
						inputType: StreamType.OggOpus,
					});
					audioPlayer.play(resource)
				} else if (message.type === "StopSound") {
					audioPlayer.stop()
				}
			});

			this.sendMessage(ws, {
				type: "SoundMap",
				soundMap: SOUNDBOARD_SERVER.soundMap
			})
		
		});
	}

	private sendMessage(client: WebSocket, message: any) {
		client.send(JSON.stringify(message))
	}

	private broadcast(message: any) {
		this.wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				this.sendMessage(client, message)
			}
		})
	}

	addSound(sound: Sound) {
		this.broadcast({
			type: "AddSound",
			sound: sound
		})
	}

	removeSound(sound: Sound) {
		this.broadcast({
			type: "RemoveSound",
			sound: sound
		})
	}
}
