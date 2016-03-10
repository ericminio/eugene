var eugene = require('eugene');
eugene.useFile('./clock-output.txt');
eugene.logOnlyCategories(['TIME', 'title']);

require('./tictac');
