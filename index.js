'use strict';
const fs = require('fs');
const path = require('path');
const execa = require('execa');
const tempWrite = require('temp-write');

const tpl = fs.readFileSync(path.resolve(__dirname, 'popup.wflow'), 'utf8');

module.exports = (url, opts) => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('macOS only'));
	}

	if (typeof url !== 'string') {
		return Promise.reject(new TypeError('`url` required'));
	}

	opts = Object.assign({
		width: 1280,
		height: 1024
	}, opts);

	const wflow = tpl.replace(/\{width\}/, opts.width).replace(/\{height\}/, opts.height);
	const cp = execa('automator', ['-i', url, tempWrite.sync(wflow)]);

	const close = cp.kill.bind(cp);
	close.then = cp.then;
	close.catch = cp.catch;

	return close;
};
