'use strict';

const winston = require('winston');
const logger = new (winston.Logger)({
	transports: [
	new (winston.transports.Console)({
		level: 'debug',
		jason: true,
		handleExceptions: true
	})
	],
	exitOnError: false
});

module.exports = logger;