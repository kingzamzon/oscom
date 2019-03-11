const os = require('os');

// //platform
// console.log(os.platform());
// //cpu arch
// console.log(os.arch());
// //cpu core info
// console.log(os.cpus());
// //free memory
// console.log(os.freemem());

//store in variables
const uPlatform = os.platform();
const uArch = os.arch();
const uCpu = os.cpus();
const user = os.userInfo();
const uFreemem = Math.ceil(os.freemem() / 43);


console.log(`Welcome ${user.username}`);
console.log(`\t Platform: ${uPlatform} \n \t Architecture: ${uArch} `);
console.log(`\t FreeMemory: ${uFreemem} \n \t Architecture: ${uArch} `);
