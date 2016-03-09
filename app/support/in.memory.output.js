module.exports = function () {

    return {
        messages: [],
        write: function(message) {
            this.messages.push(message);
        }
    };
};
