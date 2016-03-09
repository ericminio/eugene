var log = require('../app/lib/eugene');
log.output = new (require('../app/lib/console.output'))();
log.only('time');

log('info', 'clock using Eugene');
setInterval(function() {
    log('time', new Date().toString());
}, 1000);
