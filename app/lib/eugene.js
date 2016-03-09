var log = function(options, message) {
    var category = options.category || options;
    var message = message || options.message;

    if (!log.category || category == log.category) {
        log.messages.push(message);
    }    
};

log.only = function(category) {
    log.category = category;
};
log.clear = function() {
    log.messages = [];
};
module.exports = log;
