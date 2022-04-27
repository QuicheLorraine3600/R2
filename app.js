const logger = require("./src/Logger").createLogger("APP", ["console", "logs/app.log"]);
console.log("-------------------------------------------------------------------------------");
logger.info("Starting app...");

const { Bot } = require("./src/Bot");
const config = require("./config.json");

const discordBot = new Bot(process.env.COMMAND_PREFIX, config);
discordBot.login(process.env.BOT_TOKEN).then(() => {
	logger.info("Discord Bot logged !")
	discordBot.user.setPresence({ activities: [{ name: 'The King is back' }], status: 'idle' });
});
