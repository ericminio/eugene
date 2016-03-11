var eugene = require('../app/lib/eugene');
eugene.logOnlyCategories(['TIME', 'title']);
eugene.useConsole({ 'TIME': '\x1b[1m\x1b[32m' });

require('./tictac');
