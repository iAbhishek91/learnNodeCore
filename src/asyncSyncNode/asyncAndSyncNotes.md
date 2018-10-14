# Asynchronous and Synchronous

## what is asynchronous

- asynchronous is that more than one process run simultaniously.

- that is more than one set of code running simultaniously.

## what is synchronous

- only one process can executed at a time.

- only one line of code running at a time.

## how node works

- **v8** `is synchronous`.

- **javascript** `is synchronous`.

- **node** `is asynchronous`, also known as asynchronous javascript, **HOW?** this is a breakthrough!

- another inbuit module of node is **libuv**.
  - libuv requests OS, to lookup any events happening there.

  - libvu has an `queue` inside it.
    - this queue contains events that have been completed by OS.
    - only events that are requested by libuv are placed in the queue.

  - `event loop`: there is a loop inside libuv which constantly checks the queue.
    - If there is anything in the queue, it indicates that something have happened in OS.

  - *NOTE*: requesting OS and looking into `queue` using `even loop` is done when v8 is doing its work. there is no dependency between V8 and livub at this point.

  - when libuv finds that there are something(completed events) placed inside the `queue`, it processes that.
    - processing a completed OS event is done by executing a callback.
    - and the callback is executed inside V8 when V8 is not busy.
    - and the callback will be generally a javascript code running in V8.

- Hence, we can see how node is asynchronous. This is because **V8** and **libuv** is running simultaniously.

- a common phrase in node **Event driven Non-blocking I/O in V8 javascript**: this is one line for the above description.
  - Event driven as it is driven by events we request for and we get a notification when the event is completed.
  - and then we process the completed event by running a javascript callback.
  - Non-blocking as V8 continues to execute javascript while the aboe is done separately by libuv.