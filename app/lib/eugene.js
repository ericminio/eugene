var log = function(options) {
    if (options.category == log.category) {
        log.messages.push(options.message);
    }
};
log.messages = [];
log.only = function(category) {
    log.category = category;
};

module.exports = log;
