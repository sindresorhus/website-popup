'use strict';
const fs = require('fs');
const path = require('path');
const execa = require('execa');
const tempWrite = require('temp-write');

const tpl = fs.readFileSync(path.resolve(__dirname, 'popup.wflow'), 'utf8');

module.exports = opts => {
	opts = opts || {};

	if (typeof opts.url !== 'string') {
		return Promise.reject(new TypeError('url required'));
	}

	const width = opts.width || 1280;
	const height = opts.height || 1024;
	const wflow = tpl.replace(/\{width\}/, width).replace(/\{height\}/, height);

	const cp = execa('automator', ['-i', opts.url, tempWrite.sync(wflow)]);

	const kill = cp.kill.bind(cp);
	kill.then = cp.then;
	kill.catch = cp.catch;

	return kill;
};
