var eugene = {};

eugene.outputs = [];
eugene.log = function(options, message) {
    if(message === 0){
        message = message.toString();
    }
    
    var category = options.category || options;
    var message = message || options.message;

    if (eugene.shouldLog(category) && !eugene.disable) {
        eugene.outputs.forEach(function(output){
            output.write(eugene.renderer(category, message), category);
        });
    }
};

eugene.logOnlyCategories = function(categories) {
    eugene.categories = categories;
};

eugene.logAllCategories = function(categories) {
    eugene.categories = undefined;
};

eugene.shouldLog = function(category) {
    return !eugene.categories || eugene.categories.indexOf(category)!= -1
};
eugene.useConsole = function(colors) {
    eugene.outputs.push(new (require('./console.output'))(colors));
};
eugene.useColor = function(color) {
    eugene.outputs.forEach(function(output){
            if(!output.colors){
                output.colors = {};
            }
            Object.assign(output.colors, color);
        });
};

eugene.useFile = function(filePath) {
    eugene.outputs.push(new (require('./file.output'))(filePath));
};

eugene.useRollingLog = function(options) {
    eugene.outputs.push(new (require('./rolling.log'))(options));
};

eugene.renderer = require('./renderer');

eugene.loadConfiguration = function(filePath) {
    var content = require('fs').readFileSync(filePath).toString();
    eugene.categories = JSON.parse(content).logOnlyCategories;
};

eugene.stop = function(){
    eugene.disable = true;
}

eugene.resume = function(){
    eugene.disable = false;
}

module.exports = eugene
