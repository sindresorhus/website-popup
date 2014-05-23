#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var websitePopup = require('./index');
var input = process.argv[2];

function help() {
	console.log([
		pkg.description,
		'',
		'Usage',
		'  $ website-popup <url> [--size <size>]',
		'',
		'Example',
		'  $ website-popup http://sindresorhus.com --size 600x400'
	].join('\n'));
}

if (process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

var sizeFlagPos = process.argv.indexOf('--size');
var size = sizeFlagPos !== -1 ? process.argv[sizeFlagPos + 1].split('x') : [];

websitePopup({
	url: input,
	width: size[0],
	height: size[1]
}, function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
});
