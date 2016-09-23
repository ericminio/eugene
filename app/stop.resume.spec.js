var expect = require('chai').expect;
var eugene = require('./lib/eugene');

describe('Stop and resume', function(){

    beforeEach(function() {
        eugene.disable = false;
        eugene.outputs = [];
        eugene.outputs.push(require('./support/in.memory.output')());
        eugene.renderer = require('./support/render.only.the.message');;
    });

    it('stop function is defined', function(){
        expect(eugene.stop).to.not.equal(undefined);
    });

    it('stop disables the output', function(){
        eugene.log('some-category','message-1');
        expect(eugene.outputs[0].messages).to.deep.equal(['message-1']);
        eugene.stop();
        eugene.log('some-category','message-2');
        expect(eugene.outputs[0].messages).to.deep.equal(['message-1']);
    });

    it('resume function is defined', function(){
        expect(eugene.resume).to.not.equal(undefined);
    });

    it('resume enables the output', function(){
        eugene.log('some-category','message-1');
        expect(eugene.outputs[0].messages).to.deep.equal(['message-1']);
        
        eugene.stop();
        eugene.log('some-category','message-2');
        expect(eugene.outputs[0].messages).to.deep.equal(['message-1']);
        
        eugene.resume();
        eugene.log('some-category','message-3');
        expect(eugene.outputs[0].messages).to.deep.equal(['message-1', 'message-3']);
    });
});