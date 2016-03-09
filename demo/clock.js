var log = require('../app/lib/eugene');
log.output = new (require('../app/lib/console.output'))();
log.only(['time', 'title']);

log('title', 'clock using Eugene');
setInterval(function() {
    log('time', new Date().toString());
    log('waiting', '...');
}, 1000);
