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
});
