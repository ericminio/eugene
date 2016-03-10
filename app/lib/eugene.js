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
eugene.renderer = require('./renderer');

module.exports = eugene
