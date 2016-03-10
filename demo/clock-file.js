var eugene = require('eugene');
eugene.useFile('./clock-output.txt');
eugene.logOnlyCategories(['time', 'title']);

require('./tictac');
