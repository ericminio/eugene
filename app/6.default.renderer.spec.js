var expect = require('chai').expect;
var eugene = require('./lib/eugene');

describe('Default renderer', function() {

    var render;

    beforeEach(function() {
        renderer = require('./lib/renderer');
        renderer.getCurrentTime = function() {
            return new Date(2010, 11, 5, 3, 5, 7, 45);
        };
    });

    it('prefixes with timestamp', function() {
        expect(renderer('any', 'message')).to.contain('[2010-12-05 03:05:07.045]');
    });

    it('includes category', function() {
        expect(renderer('any', 'message')).to.contain(' [any] message');
    });
});
