# callback

## history of callbck

* call back was also known as call-after.
* this is a executable code that is expected to be executed in later point in time.
* the concept of callback is older than JS ans was taken from schema programming language.

## Why callback

* in JS functions are first class, and hence can be passed as a argument, returned from function assigned to a object etc.
* very common practice in JS is to pass function as parameter. note not the function invocation (`func()`) but the reference of the function object (yes, function are object in JS).
* when we pass a function to another function, we have two reason:
  * either execute the function at somepoint in time.(most common)
  * or else pass the callback function to another function which is called inside the passing function.
* So, we want to execute a piece of code inside a function:
  * one reason may be when we want to change the piece of code based on situation.
  * or else we leave the option to user of any function or API, what code they want to execute. As per node.js standards callback are used whenever we
create async API or function. Async function resolves the data (either from network, or file or IO), and then the user plays around with the data using the piece of code passed as callback.

## three rule to write better code similar to callback hell

* use `return`, `continue` and `break` as much as possible.
* write reusable function separate. This helps in modularity, readibility and testibility.
* name the callback functions. these helps in readibility and better stack trace.

>NOTE:
> callback are not always called at last. refer [./concept.js]
> callback can be synchronous or asynchronous. [./asyncCallback.js]
> callback executed only after body execution is over is also proved to be wrong [./asyncCallback.js]
