
<p align="center">
	<a href="https://www.npmjs.com/package/bible-female-names"><img src="https://cdn.abraham.gq/projects/bible-female-names/esther.png" width="30%" height="30%"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/bible-female-names">Bible-Female-Names</a>: get female names from <a href="https://www.google.com/search?q=The+Bible">The Bible</a>
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/bible-female-names"><img src="https://img.shields.io/travis/abranhe/bible-female-names.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/bible-female-names/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/bible-female-names.svg" /></a>
</p>

# Install

```
$ npm install bible-female-names
```

Names from [biblegateway.com](https://www.biblegateway.com/resources/all-women-bible/Chapter-2-Alphabetical)

# Usage

```js
const bibleFemaleNames = require('bible-female-names');

bibleFemaleNames.rand();
//=> 'Elisabeth'
```

# API

**rand()**

Type: `function`

> Return Bible female name

**.all**

Type: `array`

Over [150+](https://github.com/abranhe/bible-female-names/blob/master/bible-female-names.json) female names from The Bible.

# CLI

```
$ bible-female-names --help

	Examples
		$ bible-female-names
		Elisabeth

		$ bible-female-names --all
		Abi
		Abia
		Abiah
		Abigail
		...

		Options
			--all      Get all names
			--who-was  Search on Google for the name
```

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com) [![Greenkeeper badge](https://badges.greenkeeper.io/abranhe/bible-female-names.svg)](https://greenkeeper.io/)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# Related

[bible-male-names](https://github.com/abranhe/bible-male-names):  📖  get male names from The Bible 👕


# License

[MIT](https://github.com/abranhe/bible-female-names/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
