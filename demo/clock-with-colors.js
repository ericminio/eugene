var eugene = require('eugene');
eugene.logOnlyCategories(['TIME', 'title']);
eugene.useConsole();
eugene.useColor({ 'TIME': '\x1b[1m\x1b[32m' });
eugene.useColor({ 'title': '\x1b[1m\x1b[31m' });

require('./tictac');
