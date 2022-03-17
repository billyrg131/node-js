const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync('./Content/first.txt', 'utf-8');
const second = readFileSync('./Content/subfolder/test.txt', 'utf-8');


writeFileSync('./Content/result-sync.txt', `The result here is: ${first + ", " + second}`,{flag: "a"});

