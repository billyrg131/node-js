const os = require('os');
//displays info about current user
const user = os.userInfo();
console.log(user);
//shows system uptime in seconds
console.log(`${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs)

