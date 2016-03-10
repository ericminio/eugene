
var FileOutput = function(filePath) {
    this.filePath = filePath;
};

FileOutput.prototype.write = function(message) {
    var fs = require('fs');
    fs.writeFile(this.filePath, message, function (err) {
    });
};

module.exports = FileOutput;
