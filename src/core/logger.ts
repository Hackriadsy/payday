import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define log colors
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// Add colors to Winston
winston.addColors(colors);

// Create a custom format with timestamp and colorization
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Console transport
const consoleTransport = new winston.transports.Console({
  format: logFormat,
});

// File transports for different log levels
const fileTransports = [
  // Error logs
  new DailyRotateFile({
    filename: path.join(process.cwd(), 'logs', 'error-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    level: 'error',
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    )
  }),
  // Combined logs
  new DailyRotateFile({
    filename: path.join(process.cwd(), 'logs', 'combined-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    level: 'info',
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    )
  })
];

// Determine log level based on environment
const getLogLevel = () => {
  const env = process.env.NODE_ENV || 'development';
  const logLevelMap: { [key: string]: string } = {
    production: 'warn',
    development: 'debug',
    test: 'error'
  };
  return logLevelMap[env] || 'info';
};

// Create Winston logger
const logger = winston.createLogger({
  level: getLogLevel(),
  levels,
  transports: [
    consoleTransport,
    ...fileTransports
  ],
  exitOnError: false
});

// Custom log methods with context support
interface LoggerWithContext extends winston.Logger {
  withContext(context: string): winston.Logger;
}

const loggerWithContext = logger as LoggerWithContext;

loggerWithContext.withContext = (context: string) => {
  return logger.child({ context });
};

// Export the logger
export default loggerWithContext;