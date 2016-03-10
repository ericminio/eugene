var eugene = {};

eugene.log = function(options, message) {
    var category = options.category || options;
    var message = message || options.message;

    if (eugene.shouldLog(category)) {
        eugene.output.write(eugene.renderer(category, message));
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
eugene.useConsole = function() {
    eugene.output = new (require('./console.output'))();
};

eugene.useFile = function(filePath) {
    eugene.output = new (require('./file.output'))(filePath);
};

eugene.renderer = require('./renderer');

eugene.loadConfiguration = function(filePath) {
    var content = require('fs').readFileSync(filePath).toString();
    eugene.categories = JSON.parse(content).logOnlyCategories;
};

module.exports = eugene
