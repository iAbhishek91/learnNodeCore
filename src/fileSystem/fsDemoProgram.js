/*
fs.readFileSync()
 */
const fs = require('fs');
 // read file
const readTextFile = fs.readFileSync(__dirname+'/textFile.txt');
console.log(readTextFile.toString());

