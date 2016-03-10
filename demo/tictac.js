var eugene = require('eugene');

eugene.log('title', 'clock using Eugene');
setInterval(function() {
    eugene.log('time', new Date().toString());
    eugene.log('waiting', '...');
}, 1000);
