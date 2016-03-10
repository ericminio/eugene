
var FileOutput = function(filePath) {
    this.filePath = filePath;
};

FileOutput.prototype.write = function(message) {
    var fs = require('fs');
    fs.writeFileSync(this.filePath, message);
};

module.exports = FileOutput;
