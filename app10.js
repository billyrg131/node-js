const ld = require('lodash');

const numArr = [1,[2,[3,[4]]]];
const newArr = ld.flattenDeep(numArr);
console.log(newArr);