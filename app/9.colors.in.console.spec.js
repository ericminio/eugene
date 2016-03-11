var expect = require('chai').expect;
var sinon = require('sinon');
require('chai').use(require('sinon-chai'));
var ConsoleOutput = require('./lib/console.output');

describe('Color in console', function() {

    var writer;
    var consoleLog;

    beforeEach(function(){
        writer = new ConsoleOutput();
        consoleLog = console.log;
        console.log = sinon.spy();
    });

    afterEach(function(){
        console.log = consoleLog;
    });

    it('is not set by default', function() {
        expect(writer.colors).to.deep.equal({});
    });

    it('is chosen by category', function() {
        writer.colors = { 'error': '\x1b[1m\x1b[31m' };
        writer.write('Hello console!', 'error');

        expect(console.log).to.have.been.calledWith('\x1b[1m\x1b[31mHello console!\x1b[0m');
    });

    it('is default when category is unknown', function() {
        writer.write('Hello console!', 'other');

        expect(console.log).to.have.been.calledWith('Hello console!');
    });

});
