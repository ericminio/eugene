var eugene = {};

eugene.log = function(options, message) {
    var category = options.category || options;
    var message = message || options.message;

    if (eugene.shouldLog(category) && !eugene.disable) {
        eugene.output.write(eugene.renderer(category, message), category);
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
    eugene.output = new (require('./console.output'))(colors);
};
eugene.useColor = function(color) {
    Object.assign(eugene.output.colors, color);
};

eugene.useFile = function(filePath) {
    eugene.output = new (require('./file.output'))(filePath);
};

eugene.useRollingLog = function(options) {
    eugene.output = new (require('./rolling.log'))(options);
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
