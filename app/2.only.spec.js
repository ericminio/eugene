var expect = require('chai').expect;
var eugene = require('./lib/eugene');

describe('Logging', function() {

    beforeEach(function() {
        eugene.output = require('./support/in.memory.output')();
    });

    describe('only one category', function() {

        it('is so easy with Eugene', function() {
            eugene.logOnlyCategories('this category');
            eugene.log({ category:'this category', message:'will be logged' });
            eugene.log({ category:'this log', message:'will be ignored' });

            expect(eugene.output.messages).to.deep.equal(['will be logged']);
        });
    });

    describe('only two categories', function() {

        it('is also so easy with Eugene', function() {
            eugene.logOnlyCategories(['first', 'second']);
            eugene.log({ category:'first', message:'first log' });
            eugene.log({ category:'any', message:'will be ignored' });
            eugene.log({ category:'second', message:'second log' });

            expect(eugene.output.messages).to.deep.equal(['first log', 'second log']);
        });
    });
});
