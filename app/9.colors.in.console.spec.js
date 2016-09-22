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

    it('is mapped to the correct code', function() {
        writer.colors = { 'black category': 'black' };
        writer.write('Hello console!', 'black category');
        expect(console.log).to.have.been.calledWith('\x1b[30mHello console!\x1b[0m');

        writer.colors = { 'red category': 'red' };
        writer.write('Hello console!', 'red category');
        expect(console.log).to.have.been.calledWith('\x1b[31mHello console!\x1b[0m');

        writer.colors = { 'green category': 'green' };
        writer.write('Hello console!', 'green category');
        expect(console.log).to.have.been.calledWith('\x1b[32mHello console!\x1b[0m');

        writer.colors = { 'yellow category': 'yellow' };
        writer.write('Hello console!', 'yellow category');
        expect(console.log).to.have.been.calledWith('\x1b[33mHello console!\x1b[0m');

        writer.colors = { 'blue category': 'blue' };
        writer.write('Hello console!', 'blue category');
        expect(console.log).to.have.been.calledWith('\x1b[34mHello console!\x1b[0m');

        writer.colors = { 'magneta category': 'magneta' };
        writer.write('Hello console!', 'magneta category');
        expect(console.log).to.have.been.calledWith('\x1b[35mHello console!\x1b[0m');

        writer.colors = { 'cyan category': 'cyan' };
        writer.write('Hello console!', 'cyan category');
        expect(console.log).to.have.been.calledWith('\x1b[36mHello console!\x1b[0m');

        writer.colors = { 'white category': 'white' };
        writer.write('Hello console!', 'white category');
        expect(console.log).to.have.been.calledWith('\x1b[37mHello console!\x1b[0m');  
    });

});
