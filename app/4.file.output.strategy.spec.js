var expect = require('chai').expect;
var sinon = require('sinon');
require('chai').use(require('sinon-chai'));
var FileOutput = require('./lib/file.output');

describe('File output strategy', function() {

    var fs = require('fs');
    var filePath = './app/support/data/fileOutput.txt';

    beforeEach(function(){

    });

    afterEach(function(){
        fs.unlink(filePath, (err) => {
        });
    });

    it('writes to a file', function(done) {
        new FileOutput(filePath).write('Hello file!');

        fs.readFile(filePath, 'utf8', function (err,data) {
          expect(data).to.equal('Hello file!');
          done();
        });
    });
});
