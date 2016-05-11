#!/usr/bin/env node
'use strict';
const meow = require('meow');
const websitePopup = require('./');

const cli = meow(`
	Usage
	  $ website-popup <url> [--size <size>]

	Example
	  $ website-popup http://sindresorhus.com --size 600x400
`);

if (cli.input.length === 0) {
	console.error('Expected a URL');
	process.exit(1);
}

const size = cli.flags.size ? cli.flags.size.split('x') : [];

websitePopup({
	url: cli.input,
	width: size[0],
	height: size[1]
});
