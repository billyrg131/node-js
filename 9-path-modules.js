const path = require("path")
console.log(path.sep)

const filePath = path.join("/Content","subfolder","test.txt")
console.log(filePath)

const fileName = path.basename(filePath)
console.log(fileName)


const absolute = path.resolve(__dirname, "Content", "subfolder", "test.txt")
console.log(absolute)


const absoluteEnd = path.basename(absolute)
console.log(absoluteEnd)