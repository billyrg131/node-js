//import os module
const os = require("os");

//getting info about user
const user = os.userInfo();
console.log(user)

//system uptime in seconds
console.log(`System runtime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    free_memory: os.freemem(),
    total_memory: os.totalmem()

}
console.log(currentOS)
// local dependency - use it only in a one project
// npm i <packagename>

// global dependency - use it iin any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)
