
var fs = require('fs');

var FileOutput = function(filePath) {
    this.filePath = filePath;
};

FileOutput.prototype.write = function(message) {
    if (fs.existsSync(this.filePath)){
        message = '\n' + message;
    }

    fs.appendFileSync(this.filePath, message);
};

module.exports = FileOutput;
