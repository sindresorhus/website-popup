'use strict';
var assert = require('assert');
var websitePopup = require('./index');

it('should create a website popup', function (cb) {
	this.timeout(20000);
	var close = websitePopup({
		url: 'http://sindresorhus.com',
		width: 600,
		height: 400
	}, cb);

	setTimeout(close, 500);
});
