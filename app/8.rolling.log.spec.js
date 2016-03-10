var expect = require('chai').expect;
var eugene = require('./lib/eugene');
var fs = require('fs');
var path = require('path');

describe('Rolling log', function() {

    var logsPath = './app/support/data/logs';

    beforeEach(function() {
        if (!fs.existsSync(logsPath)){
            fs.mkdirSync(logsPath);
        }
        var files = fs.readdirSync(logsPath);
        if (files) {
            files.forEach(function(file) {
                fs.unlinkSync(path.join(logsPath, file));
            });
        }
    });

    it('creates a first file with expected name', function() {
        eugene.useRollingLog({
            path: logsPath,
            fileSize: 100,
            fileCount: 3
        });
        eugene.log('any', 'message');

        expect(fs.existsSync('./app/support/data/logs/eugene.log.1')).to.equal(true);
    });

    it('is aware of file sorting concern', function() {
        eugene.useRollingLog({
            path: logsPath,
            fileSize: 100,
            fileCount: 100
        });
        eugene.log('any', 'message');

        expect(fs.existsSync('./app/support/data/logs/eugene.log.001')).to.equal(true);
    });

    it('creates a second file when first file is full', function() {
        var content = 'this is large content to fill first file';
        fs.writeFileSync(path.join(logsPath, 'eugene.log.1'), content);
        eugene.useRollingLog({
            path: logsPath,
            fileSize: 10,
            fileCount: 3
        });
        eugene.log('any', 'message');

        expect(fs.existsSync('./app/support/data/logs/eugene.log.2')).to.equal(true);
    });

    it('creates a third file when first and second files are full', function() {
        var content = 'this is large content to fill first file';
        fs.writeFileSync(path.join(logsPath, 'eugene.log.1'), content);
        fs.writeFileSync(path.join(logsPath, 'eugene.log.2'), content);
        eugene.useRollingLog({
            path: logsPath,
            fileSize: 10,
            fileCount: 3
        });
        eugene.log('any', 'message');

        expect(fs.existsSync('./app/support/data/logs/eugene.log.3')).to.equal(true);
    });
});
