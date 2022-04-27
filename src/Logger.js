const winston = require('winston');

function createLogger (label, transports) {
	const logger = winston.createLogger({
		format: winston.format.combine(
			winston.format.label({ label: label }),
			winston.format.timestamp({format: "DD-MM-YY HH:mm:ss"}),
			// winston.format.splat(),
			winston.format.printf(info => {
				return `\x1b[32m[${info.timestamp}] [${info.label}] [${info.level.toUpperCase()}] \x1b[0m${info.message}`
			})
		)
	});
	if (transports !== undefined){
		transports.forEach(transport => {
			if (transport === "console"){
				logger.add(new winston.transports.Console())
			}else{
				logger.add(new winston.transports.File({ filename: transport }))
			}
		})
	}
	return logger
}

module.exports = {createLogger}