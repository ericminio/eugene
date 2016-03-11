var expect = require('chai').expect;
var sinon = require('sinon');
require('chai').use(require('sinon-chai'));
var ConsoleOutput = require('./lib/console.output');

describe('Console output strategy', function() {

    var consoleLog = console.log;

    beforeEach(function(){
        console.log = sinon.spy();
    });

    afterEach(function(){
        console.log = consoleLog;
    });

    it('writes to the console', function() {
        new ConsoleOutput().write('Hello console!');

        expect(console.log).to.have.been.calledWith('Hello console!');
    });

    it('writes with the expected color', function() {
        new ConsoleOutput({ 'error': '\x1b[1m\x1b[31m' }).write('Hello console!', 'error');

        expect(console.log).to.have.been.calledWith('\x1b[1m\x1b[31mHello console!\x1b[0m');
    });

    it('supports unknown category', function() {
        new ConsoleOutput({ 'error': '\x1b[1m\x1b[31m' }).write('Hello console!', 'other');

        expect(console.log).to.have.been.calledWith('Hello console!');
    });
});
