const os = require('os');

//platform
console.log(os.platform());
//cpu arch
console.log(os.arch());
//cpu core info
console.log(os.cpus());
//free memory
console.log(os.freemem());

//store in variables
const uPlatform = os.platform();
const uarch = os.arch();
const ucpu = os.cpus();
const ufreemem = os.freemem();