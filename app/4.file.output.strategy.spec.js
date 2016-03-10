var expect = require('chai').expect;
var sinon = require('sinon');
require('chai').use(require('sinon-chai'));
var FileOutput = require('./lib/file.output');

describe('File output strategy', function() {

    var fs = require('fs');
    var folderPath = './app/support/data/';
    var filePath = folderPath + 'fileOutput.txt';

    beforeEach(function(done) {
        if (!fs.existsSync(folderPath)){
            fs.mkdir(folderPath, function(){
                done();
            });
        }
        else {
            done();
        }
    });

    afterEach(function(done) {
        fs.unlink(filePath, function(){
            done();
        });
    });

    it('writes to a file', function() {
        new FileOutput(filePath).write('Hello file!');

        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
            }
            expect(data).to.equal('Hello file!');
        });
    });
});
