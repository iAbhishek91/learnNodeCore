const EventEmitter = require('events');

console.log("// -------- Basics of event handler -------");
// 1. create object from eventEmitter
// es5 style
const eventObj1 = new EventEmitter();

// es6 style
class myEventClass extends EventEmitter {};


// 2. invoking "on" method
// es5 style
eventObj1.on('morning', function(){
  console.log('Good Morning es5');
});

// es6 style
const eventObj2 = new myEventClass();
eventObj2.on('morning', function(){
  console.log('Good Morning es6');
});


// 3.invoking emit mothod
eventObj1.emit('morning');
eventObj2.emit('morning');

// 4.passing this and args to listeners
console.log("// -------- passing this and args to listeners -------");
const eventObj3 = new EventEmitter();

eventObj3.on('morning', function(name) {
  console.log(`good morning ${name}`);
});

eventObj3.on('morning', function(name, language) {
  if(language !== 'fr') {
    console.log(`good morning ${name}`);
  } else {
    console.log(`Bon-zure ${name}`);
  }
});

eventObj3.emit('morning');// not passed value will be undefined.
console.log('----------------');
eventObj3.emit('morning', 'doctorD',);
console.log('----------------');
eventObj3.emit('morning', 'doctorD', 'fr');

// this
console.log(this === eventObj3);

//5. only once listener
console.log("// -------- listener -------");
const eventObj4 = new EventEmitter();
eventObj4.once('morning', function(){
  console.log(`is "this" points to eventEmitter ${this===eventObj3}`);
});

eventObj4.on('morning', function(name) {
  console.log(`good morning ${name}`);
});

eventObj4.emit('morning', 'doctorD');
console.log('----------------');
eventObj4.emit('morning', 'doctorD');

// 6. error named event.
// eventObj4.emit('error');
// console.log('this line should not execute');

// uncomment the above two line to see how error stops ,
// the node process and do not execute anything after that

eventObj4.on('error',() => {
  console.log('an error occured');
});
eventObj4.emit('error');
console.log('this line should be executed execute');
