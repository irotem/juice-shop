const winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' }),
    new winston.transports.File({ filename: 'logs/application.log' })
  ],
  format: winston.format.simple()
})
