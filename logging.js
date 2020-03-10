const log4js = require('log4js');

// log4js.configure({
//   appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//   categories: { default: { appenders: ['cheese'], level: 'fatal' } },
// });

// const logger = log4js.getLogger('cheese');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');


log4js.configure({
  appenders: {
    everything: { type: 'file', filename: 'all-the-logs.log' },
  },
  categories: {
    default: { appenders: ['everything'], level: 'debug' },
    'noisy.component': { appenders: ['everything'], level: 'error' },
  },
});

const logger = log4js.getLogger();
const noisyLogger = log4js.getLogger('noisy.component');
logger.debug('I will be logged in all-the-logs.log');
noisyLogger.debug('I will not be logged.');
noisyLogger.error('I will  be logged.');
