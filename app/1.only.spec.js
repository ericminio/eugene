var expect = require('chai').expect;
var log = require('./lib/eugene');

describe('Logging only one category', function() {

    it('is so easy with Eugene', function() {
        log.only('this category');
        log({ category:'this category', message:'will be logged' });
        log({ category:'this log', message:'will be ignored' });

        expect(log.messages).to.deep.equal(['will be logged']);
    });
});