var ConsoleOutput = function() {};

ConsoleOutput.prototype.write = function(message) {
    console.log(message);
};

module.exports = ConsoleOutput;
