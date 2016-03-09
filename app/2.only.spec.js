var expect = require('chai').expect;
var log = require('./lib/eugene');

describe('Logging', function() {

    beforeEach(function() {
        log.output = require('./support/in.memory.output')();
    });

    describe('only one category', function() {

        it('is so easy with Eugene', function() {
            log.only('this category');
            log({ category:'this category', message:'will be logged' });
            log({ category:'this log', message:'will be ignored' });

            expect(log.output.messages).to.deep.equal(['will be logged']);
        });
    });

    describe('only two categories', function() {

        it('is also so easy with Eugene', function() {
            log.only(['first', 'second']);
            log({ category:'first', message:'first log' });
            log({ category:'any', message:'will be ignored' });
            log({ category:'second', message:'second log' });

            expect(log.output.messages).to.deep.equal(['first log', 'second log']);
        });
    });
});
