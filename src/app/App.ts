import Bot from "./Bot"
import logger from "./modules/Logger"

import { TOKEN } from "../Env"

import DB from "./modules/Database"

const bot = new Bot() 
bot.login(TOKEN)

logger.info("Here we go")

process.on('SIGINT', () => {
	logger.info("Caught interrupt signal");

	DB.close()
	bot.disconnect()

	logger.info("Bye bye !");
	setTimeout(() => {
		process.exit(0)
	}, 1000)
});