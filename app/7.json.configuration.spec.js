var expect = require('chai').expect;
var eugene = require('./lib/eugene');

describe('Json configuration', function() {

    it('is easy', function() {
        eugene.loadConfiguration('./app/support/data/configuration.with.categories.json');

        expect(eugene.categories).to.deep.equal(['one', 'two']);
    });

    it('fails when file is missing', function() {
        try {
            eugene.loadConfiguration('./missing/file');
            throw new Error("should fail");
        }
        catch (e) {
            expect(e.message).to.contain('no such file or directory');
        }
    });

    it('fails when json is malformed', function() {
        try {
            eugene.loadConfiguration('./app/support/data/configuration.with.malformed.json');
            throw new Error("should fail");
        }
        catch (e) {
            expect(e.message).to.contain('Unexpected token');
        }
    });

    it('supports missing field', function() {
        eugene.loadConfiguration('./app/support/data/configuration.with.missing.categories.json');

        expect(eugene.categories).to.equal(undefined);
    });
});
