import test from 'ava';
import delay from 'delay';
import m from './';

test('error', t => {
	t.throws(m(), 'url required');
	t.throws(m({url: 1}), 'url required');
});

test('result', async t => {
	const kill = m({
		url: 'http://sindresorhus.com',
		width: 600,
		height: 400
	});

	t.is(typeof kill, 'function');
	t.is(typeof kill.then, 'function');
	t.is(typeof kill.catch, 'function');

	await delay(2000);

	kill();
});
