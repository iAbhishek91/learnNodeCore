# fretures of `process` obj in node

## memory managment

* node will store everything in *resident set*.
* *resident set* is a basically a memory allocation.
* *resident set* contains
  * **code block** - contains the actual code
  * **stack** - variables are soted
  * **heap** - where to store objects, string and closures.

> [https://www.valentinog.com/blog/memory-usage-node-js/](reference)

## accessing and analysing the memory used by node process

* using **process.memoryUsage()**.
* this method returns an object containing (unit in bytes)
  * **rss** - *resident set size* is the total momory allocation of the current node process.
  * **heapTotal** - total memory allocated to v8.
  * **heapUsed** - total memory used by v8.
  * **external** - referes to memory external to v8. This memory is used by c++ objects bound to javascript.