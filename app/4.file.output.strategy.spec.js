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
        fs.unlink(filePath, function(err){
            done();
        });
    });

    it('writes to a file', function(done) {
        new FileOutput(filePath).write('Hello file!');

        fs.readFile(filePath, 'utf8', function(err, data) {
            expect(data).to.equal('Hello file!');
            done();
        });
    });

    it('writes multiple lines to a file', function(done) {
        var fileOutput = new FileOutput(filePath);

        fileOutput.write('Hello file!');
        fileOutput.write('Hello file again!');

        fs.readFile(filePath, 'utf8', function(err, data) {
            expect(data).to.equal('Hello file!\nHello file again!');
            done();
        });
    });
});
