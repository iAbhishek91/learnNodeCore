# how events event-emitter and eventloop works in node

## what happens when node.js process starts

- it starts executing the code given.
- all the async, timer and nextTick are taken out of kernel and kept in synchronous event demultiplexer.
- once all the code is executed (call stack/ js runtime stack) is empty, the control is passed to event loop.

## what are events and types in node

- events are triggering points (also known as actions), which a system (in this case it is node) can understand.

- there are 2 types of events:
  - system events: this are triggering points that are raised or created by C++ side of node js. This is done with help of `libuv`.
  - custom events: this are triggering points that are raised or created by javascript side of node js. This is done by `Event Emitter`.

## under the hood

- what is libuv?
  - libuv is independent 'C' library. It is embedded inside node.
  - libuv is more closer (directly connects) to operating system.
  - libuv emits events and manages system events which are closer to machine.
  - libuv leaves inside node but outside V8.
  - working of livuv is documented in [asyncAndSyncNotes](../asyncSyncNode/asyncAndSyncNotes.md)

- what are listeners? listeners are functions which wait for an event to happen. And when the event occurs it will be invoked.

## node API events

- Most of the node API is built using the concept of events. Most commonly known as `asynchronous event driver architecture`.

- And what happens in common is an object `emitter`, emit `named events`, that causes `function object` `listener` to be called.

- all object which emit events are instance of `EventEmitter`. And most of nodejs in-built functions are instance of `EventEmitter`.

- `eventEmitter` exposes method called on. `eventEmitter.on`. This method allow to add one or more function to the named events, which is emitted by the object.

- When the `EventEmitter` object emits an event (by callings its name), all the function attached to the `Events` are called SYNCHRONOUSLY (in the order they are registered.

- however we can call the listeners async way using `setImmidiate` and `process.nextTick()`

- any value returned by the called listener (function attached to the named event), will be ignored. Note: listener function should not return anything.

- `this` is intentionally points to EventEmitter object inside the listener funtions. however when we use es6 arrow function as listener this do not point to EventEmitter.

- max number listener is restricted to 10 by default for performance. can be modified by  emitter.setMaxListeners(n)

- Once event listener: when we register a listener function using `.on`, then everytime it is invoked when the named event is emitted. `once` registers a listener, which is deregistered after first emit.

- Error event: if a `error` named event is not mentioned then and it is emitted it will stop the node proess. it is always better to define a custom error named event.
