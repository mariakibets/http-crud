const { log } = require('console');
const fs = require('fs');
const path = require('path');

const currentFileName = path.basename(__filename);

const db = {};

const fileName = fs.readdirSync(__dirname);

console.log(currentFileName);
console.log(fileName);