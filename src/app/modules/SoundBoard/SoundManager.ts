import { Router } from "express";
import multer from "multer"
import { extname } from "path"

import { DB } from "../Database"
import { SOUNDBOARD_SERVER } from "./SoundBoardServer";

import { unlink } from "fs"

const UPLOAD_PATH = "./public/sounds/"

const upload = multer({ 
	fileFilter: function (req, file, cb){
		// https://www.thoughtco.com/audio-file-mime-types-3469485
		const supportedExtensions = [".mp3", ".ogg", ".wav"]
		const supportedMimeTypes = ["audio/mpeg", "audio/ogg", "audio/vnd.wav"]
		cb(null, supportedExtensions.includes(extname(file.originalname).toLocaleLowerCase()) && supportedMimeTypes.includes(file.mimetype))
	},
	limits: {
		fileSize: 5 * 1024 * 1024 //5Mo
	},
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, UPLOAD_PATH)
		},
		filename: function (req, file, cb) {
			const uuid = Date.now() + '-' + Math.round(Math.random() * 1E9)
			cb(null, uuid + extname(file.originalname).toLocaleLowerCase())
		}
	})
	  
})

export const soundManagerRouter = Router()

export interface Sound {
	id: number,
	name: string,
	file: string,
	author: string
}

soundManagerRouter.post("/addSound", upload.single("soundFile"), (req, res, next) => {
	if (req.file === undefined) {
		res.send("NO FILE")
		return
	}
	if (req.body.name === undefined || req.body.author === undefined) {
		unlink(UPLOAD_PATH + req.file.filename, err => {})
		res.send("MISSING FIELDS")
		return
	}

	DB.serialize(() => {
		const stmt = DB.prepare("INSERT INTO sounds (name, file, author) VALUES (?, ?, ?)");

		console.log("running")
		// @ts-ignore
		stmt.run(req.body.name, req.file.filename, req.body.author, function(err) {
			// @ts-ignore
			const sound = {id: this.lastID, name: req.body.name, file: req.file.filename, author: req.body.author}
			SOUNDBOARD_SERVER.addSound(sound)
			// @ts-ignore
			res.redirect("/?lastId=" + this.lastID)
		})
	});
})

soundManagerRouter.get("/removeSound/:soundId" , (req, res, next) => {
	DB.serialize(() => {	
		const stmt = DB.prepare("SELECT * FROM SOUNDS WHERE id = ?")
		stmt.run(req.params.soundId).each((err, sound: Sound) => {
			unlink(UPLOAD_PATH + sound.file, err => console.log)
			const stmt = DB.prepare("DELETE FROM sounds WHERE id = ?");		
			stmt.run(req.params.soundId)

			SOUNDBOARD_SERVER.removeSound(sound)

			res.redirect("/?ok=true")
		})
	});
})
