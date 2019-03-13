const os = require('os');



//store in variables
const uPlatform = os.platform();
const uArch = os.arch();
const uCpu = os.cpus();
const user = os.userInfo();
const uFreemem = Math.ceil(os.freemem() / 43);
const softWares = [
    { name: 'GTA5', spec: 54323 },
    { name: 'GTA4', spec: 54323 }
];

console.log(`Welcome ${user.username}`);
var softname = process.argv[2];

softWares.forEach(name => {
    if (name.name === softname) {
        console.log('software ', name.name);
        console.log('software spec', name.spec);
    }

});

// if (softname === 'GTA5') {
//     console.log('software name: ', softname);
// } else {
//     console.log("Software not recongnized")
// }
uCpu.forEach(details => {
    console.log(details.model);
});
console.log("Your OS detials");
console.log(`\t Platform: ${uPlatform} \n \t Architecture: ${uArch} `);
console.log(`\t FreeMemory: ${uFreemem} \n \t Architecture: ${uArch} `);
