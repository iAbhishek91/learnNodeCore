const blankModule = require('./blankModule');
const simpleModule = require('./simplemodule');

console.log(blankModule);
console.log(simpleModule);

// this is true only when this file is executed ,
// directly via node.
console.log(require.main === module);

//module.children
console.log(module.children);