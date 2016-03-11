var ConsoleOutput = function() {
    this.colors = {};
};

ConsoleOutput.prototype.write = function(message, category) {
    if (this.colors && this.colors[category]) {
        console.log(this.colors[category] + message + '\x1b[0m');
    }
    else {
        console.log(message);
    }
};

module.exports = ConsoleOutput;
