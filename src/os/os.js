const os = require('os');

console.log("---------------os.EOL------------------")
console.log(os.EOL); // prints the end of line for the OS
console.log(JSON.stringify(os.EOL)); // displays the character

console.log("---------------os.arch()-------------");
console.log(os.arch()); // udentify the CPU architecture via os for which the node was complied

console.log("---------------os.constants-------------");
console.log(os.constants); // returns a object of commonly used OS constants for process signal and error

console.log("----------------os.cpus()-------------------");
console.log(os.cpus()); // refer node documentation for each parameter of the CPU

console.log("-----------------os.endianness()------------");
console.log(os.endianness()); // arrengment of LSB or HSB at first  for the CPU in which node is compliedLE littleendian BE bigendian

console.log('----------------os.totalmem()---------------"');
console.log(os.totalmem()); // total memory of system in bytes

console.log('----------------os.freemem()---------------"');
console.log(os.freemem()); // free memory of system in bytes

//added in v10.10.0
//console.log("----------------os.get/setPriority([])-------------");
//console.log(os.getPriority()); // random pid of vscode this is 

console.log("---------------os.homedir()------------------");
console.log(os.homedir()); // home directory of the user

console.log("---------------os.tmpdir()------------------");
console.log(os.tmpdir()); // os default directory for temp files

console.log("---------------os.hostname()------------------");
console.log(os.hostname()); // host name of the os

console.log("----------------os.loadavg()-----------------");
console.log(os.loadavg()); // load average is a measuring system activity calculated by the OS and expressed in fractional number
// load average should be less than the number of logical CPUs in the system
// do not work on windows as it is a specific concept of UNIX

console.log("----------------os.networkInterfaces()-----------------");
console.log(os.networkInterfaces());

console.log("----------------os.platform()-------------------");
console.log(os.platform()); // similar to process.platform
// aix, darwin, freebsd, win32, linux, android

console.log("----------------os.type()--------------------");
console.log(os.type()); //string identifying the OS name as returned by uname(3)
// refer: https://linux.die.net/man/3/uname

console.log("----------------os.release()--------------------");
console.log(os.release()); // string identifying os release number

console.log("-----------------os.uptime()-------------------");
console.log(os.uptime());