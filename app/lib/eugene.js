var log = function(options, message) {
    var category = options.category || options;
    var message = message || options.message;

    if (!log.category || category == log.category) {
        log.output.write(message);
    }
};

log.only = function(category) {
    log.category = category;
};

module.exports = log;
