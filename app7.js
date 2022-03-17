const path = require('path');

const sep = path.sep;
console.log(sep);

const fPath = path.join('/content', 'subfolder', 'test.txt')
console.log(fPath);

console.log(path.basename(fPath));

const fullPath = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(fullPath)