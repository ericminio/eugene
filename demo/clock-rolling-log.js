var eugene = require('eugene');
eugene.useRollingLog({
    path: './logs',
    fileSize: 100,
    fileCount: 3
});
eugene.logOnlyCategories(['TIME', 'title']);

require('./tictac');
