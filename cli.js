#!/usr/bin/env node
'use strict';
var meow = require('meow');
var websitePopup = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ website-popup <url> [--size <size>]',
		'',
		'Example',
		'  $ website-popup http://sindresorhus.com --size 600x400'
	]
});

if (cli.input.length === 0) {
	console.error('Expected a URL');
	process.exit(1);
}

var size = cli.flags.size ? cli.flags.size.split('x') : [];

websitePopup({
	url: cli.input,
	width: size[0],
	height: size[1]
}, function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
