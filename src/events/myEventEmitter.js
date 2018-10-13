// more rubust implementation is there in node
// hoever the concept is same
function events (){
  this.eventList = {};
}

events.prototype.on = function (type, listener) {
  this.eventList[type] = this.eventList[type] || [];
  this.eventList[type].push(listener);
}

events.prototype.emit = function (type) {
  this.eventList[type].forEach(element => {
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