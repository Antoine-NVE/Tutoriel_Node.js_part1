const { multiply, divide } = require('./functions');
const { chain } = require('mathjs');

console.log(multiply(5, 10));
console.log(divide(5, 10));

console.log(chain(3).add(4).multiply(2).done());;
