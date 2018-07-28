import test from 'ava';
import fn from './';

test('Test Names',t => {
	t.true(fn.all.length > 0);
	t.truthy(fn.rand());
	t.not(fn.rand(), fn.rand());
	t.is(fn.all[0], 'Abi');
	t.is(fn.all[1], 'Abia');
	t.is(fn.all[2], 'Abiah');
	t.is(fn.all[3], 'Abigail');
	t.is(fn.all[39], 'Elisabeth');
});
