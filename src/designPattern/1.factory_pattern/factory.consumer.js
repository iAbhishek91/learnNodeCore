const {
  basicFactory,
  switchFactory,
  encapsulationFractory,
} = require('./factory');

const a = basicFactory('from basic fractory');
console.log(a.message);



const stringObj = switchFactory('string');
const integerObj = switchFactory('integer');
console.log(stringObj instanceof String, integerObj instanceof Number);



const person = encapsulationFractory('abhi');
console.log(person.getName());