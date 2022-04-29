const fs = require("fs");

const DATA_DIRECTORY = "./datas/"

class DataSaver {

	#memory

	constructor() {
		this.#load()
	}

	#load() {

		this.#memory = new Map();

		const dataFiles = fs.readdirSync(DATA_DIRECTORY).filter(file => file.endsWith('.json') && !file.startsWith("-"));
		for (const file of dataFiles){
			const cacheFile = require("../" + DATA_DIRECTORY + file);
			this.#memory.set(cacheFile.name, cacheFile.content);
		}
	}

	set(primaryKey, secondaryKey, value) {
		if (!this.has(primaryKey)) {
			this.#memory.set(primaryKey, {})
		}
		this.#memory.get(primaryKey)[secondaryKey] = value;
	}

	get(key) {
		return this.#memory.get(key);
	}

	has(key) {
		return this.#memory.has(key);
	}

	delete(key) {
		return this.#memory.delete(key);
	}

	save(key) {
		fs.writeFile(DATA_DIRECTORY + key + ".json", JSON.stringify({name: key, content: this.#memory.get(key)}, null, 4), 'utf8', function (err) {
			if (err) {
				console.log("An error occured while writing JSON Object to File.");
				return console.log(err);
			}

			console.log("JSON file has been saved.");
		});
	}

	saveAll() {
		for (const key of this.#memory.keys()) {
			this.save(key);
		}
	}

}

module.exports = {DataSaver}