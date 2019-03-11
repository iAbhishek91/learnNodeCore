// process next tick is called as deffered callback, put the callback on top of the event queue.
// Very important to note: nextTick() is not part of event loop. there is a separate 'nextTick' queue, which is processed after the current operation is completed
// irrespective of event loop phase. callback should be resolved before event loop continues. This may cause other events to starve.
// Process nextTick is mostly used in API design, where we need to make some sync code to work as async.

// deffered can also be done using setImmidiate or setTimeout, setImmediate put the event in the end of the event queue.
// all three makes things asynchronous

// however important to note: setImmediate is always executed before any setTimeout
// if it is bound inside a IO.

// Below scenario is opposit where set immidiate is exeuted after setTimeout as it is not bound in an IO.

console.log('start');

process.nextTick(() => {
  setTimeout(() => {console.log( 'deffered with timer')}, 2000);
});

process.nextTick(() => {
  console.log( 'deffered without timer');
});

setImmediate(() => {
  console.log('defferd by setImmedaite');
});

setTimeout(() => {
  console.log('defined by setTimeout');
}, 0);

console.log('end');

// note nextTick always goes first in the event queue
// set immediate always goes last in the event queue
