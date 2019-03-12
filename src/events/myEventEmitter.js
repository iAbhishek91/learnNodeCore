// more rubust implementation is there in node
// hoever the concept is same
function events (){
  this.eventList = {};
}

events.prototype.on = function (type, listener) {
  this.eventList[type] = this.eventList[type] || []; // creates an empty array for this.eventList[type] = []
  this.eventList[type].push(listener); // then pushes everytime a listener is added
}

events.prototype.emit = function (type) {
  this.eventList[type].forEach(element => {
    // executes elements one by one in synchronous fashion as forEach is synchronous
    // if the function is async, then there is no way you can know the call is complete
    // in this case use array.reduce and use a promise chain
    // https://www.heavymetalcoder.com/make-array-foreach-synchronous-even-with-an-asynchronous-body/
    element();
  });
};

// ------ Using the custom event library-----
const greet = new events();

greet.on('morning', function(){
  console.log(`is "this" points to eventEmitter ${this===greet}`);
  console.log('Good morning');
});

greet.on('morning', function() {
  console.log('Have a heavy breakfast');
});

greet.emit('morning');