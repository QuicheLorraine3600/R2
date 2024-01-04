const HOST = "ws://localhost:8888/soundboardsocket"
const socket = new WebSocket(HOST);

function sendMessage(messageObject) {
	socket.send(JSON.stringify(messageObject))
}

function playSound(soundId) {
	sendMessage({
		type: "PlaySound",
		soundId: soundId
	})
}

function stopSound() {
	sendMessage({
		type: "StopSound"
	})
}

const SOUND_LIST = document.getElementById("SoundList")

function addSound(sound) {
	const newButton = document.createElement("button")
	newButton.id = "SOUND_" + sound.id
	newButton.className = "Sound"
	const title = document.createElement("h4")
	const author = document.createElement("h5")
	newButton.appendChild(title)
	newButton.appendChild(author)
	title.className = "SoundName"
	author.className = "SoundAuthor"
	title.innerText = sound.name
	author.innerText = "by " + sound.author
	newButton.onclick = () => handleButton(sound.id)
	SOUND_LIST.appendChild(newButton)
}

let deleteMode = false
function toggleDeleteMode() {
	if (deleteMode == false) {
		deleteMode = true;
		// TODO: CHANGE COLORS
	} else {
		deleteMode = false
		// TODO: CHANGE COLORS
	}

}
function handleButton(soundId) {
	if (deleteMode) {
		window.location.href = "/delete/" + soundId
	} else {
		playSound(soundId)
	}
}

function removeSound(sound) {
	document.getElementById("SOUND_" + sound.id).remove()
}

socket.addEventListener("open", event => {
	console.log("Connection established !")
});

socket.addEventListener("message", event => {
	const message = JSON.parse(event.data)
	console.log(message)
	switch (message.type) {
		case "SoundMap":
			console.log(message.soundMap)
			for (id in message.soundMap) {
				addSound(message.soundMap[id])
			}
			break;
		case "AddSound":
			console.log("New sound")
			addSound(message.sound)
			break;
		case "RemoveSound":
			console.log("Sound removed")
			removeSound(message.sound)
			break
		default:
			console.log("Unknown message")
	}
});