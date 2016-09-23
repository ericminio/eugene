var eugene = require('../app/lib/eugene');

var fs = require('fs');

if(fs.existsSync('./clock-output.txt')){
    console.log('deleting...');
    fs.unlinkSync('./clock-output.txt');
}


eugene.useFile('./clock-output.txt');
eugene.logOnlyCategories(['TIME', 'title']);

require('./tictac');
