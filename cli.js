#!/usr/bin/env node
'use strict';
const meow = require('meow');
const open = require('opn');
const biblefemaleNames = require('./');

const search = 'https://www.google.com/search?q=';

const cli = meow(`
Examples
	$ bible-female-names
	Elisabeth

	$ bible-male-names --all
	Abi
	Abia
	Abiah
	Abigail
	...

	Options
		--all      Get all names
		--who-was  Search on Google for the name
`);

let name = biblefemaleNames.rand();

console.log(cli.flags.all ? biblefemaleNames.all.join('\n') : name);

if(cli.flags.whoWas){
	open(search + 'Who+was+' + name + '+in+The+Bible')
	process.exit();
}
