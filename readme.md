# website-popup [![Build Status](https://travis-ci.org/sindresorhus/website-popup.svg?branch=master)](https://travis-ci.org/sindresorhus/website-popup)

> Open a website in a popup *(OS X)*

<img src="screenshot.png" width="759">


## Install

```
$ npm install --save website-popup
```


## Usage

```js
const websitePopup = require('website-popup');

websitePopup({
	url: 'http://sindresorhus.com',
	width: 600,
	height: 400
}).then(() => {
	// closed
});

const kill = websitePopup({url: 'http://sindresorhus.com'});
setTimeout(kill, 2000);
```


## API

### websitePopup(options)

Returns a Promise-like method to kill the popup.

#### options

##### url

*Required*<br>
Type: `string`

The url you would like to open.

##### width

Type: `number`<br>
Default: `1280`

The width of the popup.

##### height

Type: `number`<br>
Default: `1024`

The height of the popup.


## CLI

```
$ npm install --global website-popup
```

```
$ website-popup --help

  Usage
    $ website-popup <url> [--size <size>]

  Example
    $ website-popup http://sindresorhus.com --size 600x400
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
