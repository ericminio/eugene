var eugene = require('../app/lib/eugene');
var fs = require('fs');

if (!fs.existsSync('./logs')){
    fs.mkdirSync('./logs');
}

eugene.useRollingLog({
    path: './logs',
    fileSize: 100,
    fileCount: 3
});
eugene.logOnlyCategories(['TIME', 'title']);

require('./tictac');
