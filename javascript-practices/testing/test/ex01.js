const assert = require('assert');
const { hello } = require('../ex01');

// test case 안의 함수는 람다 사용을 안하는게 좋다.
describe('hello()', function(){
    it('"Hello World" 문자열을 반환 해야함', function(){
        assert.strictEqual(hello(), "Hello World");
    })
})