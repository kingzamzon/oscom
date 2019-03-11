const os = require('os');



//store in variables
const uPlatform = os.platform();
const uArch = os.arch();
const uCpu = os.cpus();
const user = os.userInfo();
const uFreemem = Math.ceil(os.freemem() / 43);


console.log(`Welcome ${user.username}`);
var softname = process.argv[2];

if (softname === 'GTA5'){
    console.log('software name: ', softname);
}else {
    console.log("Software not recongnized")
}
console.log("Your OS detials");
console.log(`\t Platform: ${uPlatform} \n \t Architecture: ${uArch} `);
console.log(`\t FreeMemory: ${uFreemem} \n \t Architecture: ${uArch} `);
