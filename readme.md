# website-popup [![Build Status](https://travis-ci.org/sindresorhus/website-popup.svg?branch=master)](https://travis-ci.org/sindresorhus/website-popup)

> Open a website in a popup *(macOS)*

<img src="screenshot.png" width="759">


## Install

```
$ npm install --save website-popup
```


## Usage

```js
const websitePopup = require('website-popup');
const url = 'https://sindresorhus.com';

websitePopup(url, {width: 600, height: 400}).then(() => {
	// closed
});

const close = websitePopup(url);
setTimeout(close, 2000);
```


## API

### websitePopup(url, [options])

Returns a Promise-like method to close the popup.

#### url

Type: `string`

URL to open.

#### options

##### width

Type: `number`<br>
Default: `1280`

Width of the popup.

##### height

Type: `number`<br>
Default: `1024`

Height of the popup.


## Related

- [website-popup-cli](https://github.com/sindresorhus/website-popup-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
