import test from 'ava';
import delay from 'delay';
import m from './';

test('error', t => {
	t.throws(m(), '`url` required');
	t.throws(m(1), '`url` required');
});

test('result', async t => {
	const close = m('https://sindresorhus.com', {
		width: 600,
		height: 400
	});

	t.is(typeof close, 'function');
	t.is(typeof close.then, 'function');
	t.is(typeof close.catch, 'function');

	await delay(2000);

	close();
});
