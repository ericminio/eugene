var expect = require('chai').expect;
var eugene = require('./lib/eugene');

describe('Eugene', function() {

    beforeEach(function() {
        eugene.outputs = [];
        eugene.outputs.push(require('./support/in.memory.output')());
        eugene.renderer = require('./support/render.only.the.message');;
    });

    it('accepts strings', function() {
        eugene.log('this category', 'will be logged');

        expect(eugene.outputs[0].messages).to.deep.equal(['will be logged']);
    });

    it('accepts options', function() {
        eugene.log({ category:'this category', message:'will be logged' });

        expect(eugene.outputs[0].messages).to.deep.equal(['will be logged']);
    });

    it('prioritizes given message over message given in options', function() {
        eugene.log({ category:'this category', message: 'will not be logged' }, 'will be logged');

        expect(eugene.outputs[0].messages).to.deep.equal(['will be logged']);
    });

    it('delegates actual writing to the given output', function() {
        var sinon = require('sinon');
        require('chai').use(require('sinon-chai'));
        eugene.outputs[0] = { write: sinon.spy() };
        eugene.log('Yoda', 'Your father he is');

        expect(eugene.outputs[0].write).to.have.been.calledWith('Your father he is', 'Yoda');
    });

    it('transfers color configuration to writer', function() {
        eugene.useConsole();
        eugene.useColor({ 'first': 'first-color' });
        eugene.useColor({ 'second': 'second-color' });

        expect(eugene.outputs[0].colors).to.deep.equal({ 'first': 'first-color', 'second': 'second-color' });
    });

    it('does not write undefined when logging 0', function() {
        var fs = require('fs');
        var path = require('path');

        var logsPath = './app/support/data/logs/';
        if (!fs.existsSync(logsPath)){
            fs.mkdirSync(logsPath);
        }
        var files = fs.readdirSync(logsPath);
        if (files) {
            files.forEach(function(file) {
                fs.unlinkSync(path.join(logsPath, file));
            });
        }

        eugene.useFile(logsPath + 'zero.log');

        eugene.log("info", 0);

        var data = fs.readFileSync(logsPath + 'zero.log').toString();

        expect(data).to.equal('0');
    });
});
