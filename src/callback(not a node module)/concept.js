// this file illustrate that callback can be used to pass in another function
// and the definition of the funciton can be changed as required.
// Note: the call back passed will process the data and return

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

function calculate (a, b, callback) {
  return callback(a,b);
}

console.log(`add 8 and 5 :${calculate(8,5, add)}`);
console.log(`sub 8 and 5 :${calculate(8,5, sub)}`);
console.log(`mul 8 and 5 :${calculate(8,5, mul)}`);
console.log(`div 8 and 5 :${calculate(8,5, div)}`);
console.log(`mod 8 and 5 :${calculate(8,5, mod)}`);

console.log("-----------can be executed before------------");
// this is not a general practice

function calcAndDisplay (a, b, callback) {
  const result = callback(a,b);
  console.log(`${callback.name} result: ${result}`);
}

calcAndDisplay(8,5, add);
calcAndDisplay(8,5, sub);
calcAndDisplay(8,5, mul);
calcAndDisplay(8,5, div);
calcAndDisplay(8,5, mod);

console.log("-----------can be without return------------");
const add1 = (a, b) => {console.log(`add ${a} and ${b} = ${a + b}`)};
const sub1 = (a, b) => {console.log(`sub ${a} and ${b} = ${a - b}`)};
const mul1 = (a, b) => {console.log(`mul ${a} and ${b} = ${a * b}`)};
const div1 = (a, b) => {console.log(`div ${a} and ${b} = ${a / b}`)};
const mod1 = (a, b) => {console.log(`mod ${a} and ${b} = ${a % b}`)};


const displayCalcResult = (a, b, callback) => {
  callback(a,b);
}

displayCalcResult(8,5, add1);
displayCalcResult(8,5, sub1);
displayCalcResult(8,5, mul1);
displayCalcResult(8,5, div1);
displayCalcResult(8,5, mod1);
