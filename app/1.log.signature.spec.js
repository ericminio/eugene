var expect = require('chai').expect;
var log = require('./lib/eugene');

describe('Eugene', function() {

    beforeEach(function() {
        log.output = require('./support/in.memory.output')();
    });

    it('accepts strings', function() {
        log('this category', 'will be logged');

        expect(log.output.messages).to.deep.equal(['will be logged']);
    });

    it('accepts options', function() {
        log({ category:'this category', message:'will be logged' });

        expect(log.output.messages).to.deep.equal(['will be logged']);
    });

    it('accepts string after options', function() {
        log({ category:'this category', message: 'will not be logged' }, 'will be logged');

        expect(log.output.messages).to.deep.equal(['will be logged']);
    });
});