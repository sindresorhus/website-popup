'use strict';
var fs = require('fs');
var path = require('path')
var execFile = require('child_process').execFile;
var tpl = fs.readFileSync(path.resolve(__dirname, 'popup.wflow'), 'utf8');
var tempWrite = require('temp-write');

module.exports = function (opts, cb) {
	if (typeof opts !== 'object' && typeof opts.url === 'string') {
		throw new TypeError('`options.url` required');
	}

	cb = cb || function () {};

	var width = opts.width || 1280;
	var height = opts.height || 1024;
	var wflow = tpl.replace(/\{width\}/, width).replace(/\{height\}/, height);

	var cp = execFile('automator', ['-i', opts.url, tempWrite.sync(wflow)], function (err) {
		if (err) {
			return cb(err.killed ? null : err);
		}

		cb();
	});

	return cp.kill.bind(cp);
};
