const assert = require('assert').strict;
const { X } = require('./ex02');
try{
    const a = new X();
    const b = new X();
    const c = a;

    assert.equals(a, c, 'fail: a === c');
    // assert.equals(a, b, 'fail: a === c');
    assert.deepEquals(a, c, 'fail: deepEqual1');
    assert.deepEquals(a, b, 'fail: deepEqual2');

    b.bar = 'foo';
    assert.deepEqual(a, b, 'fail: notDeepEqual2');
    console.log('ok');
} catch(err) {
    console.log(err.message);
}
