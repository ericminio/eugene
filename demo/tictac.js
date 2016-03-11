var eugene = require('eugene');

var defaultRenderer = eugene.renderer;
eugene.renderer = function(category, message) { return message; };
eugene.log('title', 'clock using Eugene');
eugene.renderer = defaultRenderer;

setInterval(function() {
    eugene.log('TIME', 'tic tac');
    eugene.log('waiting', '...');
}, 1000);
