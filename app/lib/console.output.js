var ConsoleOutput = function() {
    this.colors = {};
    this.colorMap = {
    'black':'\x1b[30m',
    'red':'\x1b[31m',
    'green':'\x1b[32m',
    'yellow':'\x1b[33m',
    'blue':'\x1b[34m',
    'magneta':'\x1b[35m',
    'cyan':'\x1b[36m',
    'white':'\x1b[37m'
    };
};

ConsoleOutput.prototype.write = function(message, category) {
    if (this.colors && this.colors[category]) {
        var colorCode = this.colors[category];
        if(this.colorMap[colorCode]){
            colorCode = this.colorMap[colorCode];
        }
        console.log(colorCode + message + '\x1b[0m');
    }
    else {
        console.log(message);
    }
};

module.exports = ConsoleOutput;
