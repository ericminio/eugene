var expect = require('chai').expect;
var sinon = require('sinon');
require('chai').use(require('sinon-chai'));
var ConsoleOutput = require('./lib/console.output');
var eugene = require('./lib/eugene');

describe('Multiple output', function() {

    var consoleLog = console.log;

    var fs = require('fs');
    var folderPath = './app/support/data/';
    var filePath = folderPath + 'fileFromMultipleOutput.txt';

    beforeEach(function(){
        console.log = sinon.spy();
    });

    afterEach(function(){
        console.log = consoleLog;
    });

    it('writes to the console and to the file', function(done) {
        eugene.useFile(filePath);
        eugene.useConsole();
        eugene.log('category', 'Hello all outputs!');

        
    
        fs.readFile(filePath, 'utf8', function(err, data) {
        expect(data).to.contain('Hello all outputs!');
        expect(console.log).to.have.been.called;
        done();
        });
    });
});
