import http from "http"

import express, { Express } from "express"

import { AudioPlayer, createAudioPlayer } from "@discordjs/voice";

import SoundBoardWebSocketServer from "./SoundBoardWebSocketServer"
import { Sound, soundManagerRouter, SoundMap, getSoundMap } from "./SoundManager"

import logger from "../Logger";

const app = express()

class SoundBoardServer {

	public readonly audioPlayer: AudioPlayer
	public readonly soundMap: SoundMap

	private readonly app: Express
	private readonly server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
	private readonly wss: SoundBoardWebSocketServer

	constructor() {
		this.app = app
		this.audioPlayer = createAudioPlayer();
		this.soundMap = {}
		getSoundMap(this.soundMap)

		this.app.use(express.static('public'))
		this.app.use(soundManagerRouter)

		this.server = http.createServer(this.app)
		this.wss = new SoundBoardWebSocketServer(this.server, this.audioPlayer)
	}

	start(port: number) {
		this.server.listen(port, () => {
			logger.info(`SoundBoard app listening on http://localhost:${port}`)
		})
	}

	addSound(sound: Sound) {
		this.soundMap[sound.id] = sound
		this.wss.addSound(sound)
	}

	removeSound(sound: Sound) {
		delete this.soundMap[sound.id]
		this.wss.removeSound(sound)
	}

}

export const SOUNDBOARD_SERVER = new SoundBoardServer()
