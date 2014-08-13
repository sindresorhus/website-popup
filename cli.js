#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var websitePopup = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    website-popup <url> [--size <size>]',
		'',
		'  Example',
		'    website-popup http://sindresorhus.com --size 600x400'
	].join('\n'));
}

if (!input || argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

var sizeFlagPos = argv.indexOf('--size');
var size = sizeFlagPos !== -1 ? argv[sizeFlagPos + 1].split('x') : [];

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
