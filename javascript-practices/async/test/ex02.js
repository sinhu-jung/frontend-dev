const ex02 = require('../ex02');

const should = require('chai').should();
//const assert = require('assert').strict;

describe('ex02()', function() {
    it('should return "ok" ', async function() {
        const res = await ex02('param-data');
        //assert.equal(res, 'ok');
        res.should.equal('ok');
    });
});