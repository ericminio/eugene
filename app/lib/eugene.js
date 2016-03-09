var log = function(options, message) {
    var category = options.category || options;
    var message = message || options.message;

    if (log.shouldLog(category)) {
        log.output.write(message);
    }
};

log.only = function(categories) {
    log.categories= categories;
};
log.shouldLog = function(category) {
    return !log.categories || log.categories.indexOf(category)!= -1
};

module.exports = log;
