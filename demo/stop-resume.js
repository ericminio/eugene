var eugene = require('../app/lib/eugene');
eugene.useConsole();
eugene.log('category-1','message-1');
eugene.stop();
eugene.log('category-1','message-2');
eugene.log('category-1','message-3');
eugene.resume();
eugene.log('category-1','message-4');