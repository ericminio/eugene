var eugene = require('../app/lib/eugene');
eugene.useConsole();
eugene.logOnlyCategories(['time', 'title']);

eugene.log('title', 'clock using Eugene');
setInterval(function() {
    eugene.log('time', new Date().toString());
    eugene.log('waiting', '...');
}, 1000);
