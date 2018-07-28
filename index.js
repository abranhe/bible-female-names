'use strict';
const cUa = require('consecutively-unique-array');
var bibleFemaleNames = require('./bible-female-names.json');

exports.all = bibleFemaleNames;
exports.rand = cUa(bibleFemaleNames);
