#!/usr/bin/node
const dict = require('./101-data.js').dict;
let newDict = {};
for (let key of dict) {
  if (newDict[key] === undefined) {
    newDict[key] = [key];
  } else {
    newDict[key].push(key);
  }
}
console.log(newDict);
