# Buffers

## what is buffer

- buffer is a **temporary** holding spot(memory space) for data.

- this is used for data movement or IO operations.

- this is **limited memory area** (finite size).

- buffer holds **binary** data with a perticular character encoding (utf8, ascii, base64 etc..).

- **Buffer** is written in the c++ side of node and available on javascript side of nodejs. This is globally available to node. Hence require/or import is not required.

- javascript was not having capabilities for handling binary data (reading and manupulating), character encoding from unicode data.

- this is very much required when we handel server side data. server side programming language should have capability to handel different types of data coming from client.

- **Buffer** was desinged in node to add this feature in javascript.

- *pre es6* era was this was true, now es6 have mechanism to handel binary data. This is not inbuilt in javascript (means in V8). Hence this module will probably become obsolate in coming days. However, node still uses its own buffer module internally.
  - this feature is called **ArrayBuffer()** and **TypedArray**. we will look into array buffer separately.
  - latest node implements **uint8Array in buffer class**.

## under the hood working of node Buffer module

- Buffer memory are not created outside V8 heap.

- creation of buffer and initialization is separately done to improve performance.

- **Buffer.from()**
  - takes three argument: value, encodingOrOffset, length
    - value: can be string, array, buffer, arrayBuffer. Invalid values are null, undefined, number.

  - Incase of array or other type of object it calls function `fromObject(objValue).
    - `fromObject(objValue)` returns `fromArrayLike(objValue)`. `fromArrayLike(objValue)` allocate a memory of size `Array.length`.*note: before the value is copied allocated memory has previous values, which may be confidential.* and then copies the value of the array into the buffer.
    - `fromArrayLike(objValue)` returns a buffer of length same of size of the Array and with copied data from the Array.

  - Incase of string it calls function `fromString(strValue, encodingOffset).
    - incase encodingOffset is undefined or anything other than string, then it consider `utf8` as default.
    - if we pass blank string, then `new FastBuffer()` is returned.
    - it finds length of the string based on the encoding. and if the length is -1 the it throws a TypeError.
    - `new FastBuffer(allocPool, poolOffset, length)` is returned. then the string is written in the buffer and then the buffer is returned.

  - the array are kept in the `__proto__` of the buffer which is a Uint8Array.
  - Buffer is of type ArrayBuffer.

- **Buffer.alloc()**
  - returns a Buffer object with initilized memory. That means old data is removed.

  - takes three arguments: `size`, `fill`, `encoding`.

- **Buffer.allocUnsafe()**
  - returns a Buffer object with uninitilized memory. That may be previous data which may be confediential.

  - takes only one argument: `size`.

  - fastet than `Buffer.alloc()` as it do not initialize the memory heap.

- **Buffer.allocUnsafeSlow()**
  - same as `Buffer.allocUnsafe()`.

  - only difference is that `allocUnsafe()` may allocate shared internal memory pool. However, `allocUnsafeSlow()` will never use shared internal memory pool.

- **Buffer.byteLength()**
  - accepts two parameter, string as first parameter and second one should be encoding.
  - it calculates the length of the string for a specific encoding. default encoding is `utf8`

## features of node Buffer module

- create buffer of different size, for a perticular size. `const buf = new Buffer('hello', 'utf8')`
- convert to string. `buf.toString();//hello`
- convert to json. `buf.toJson();//{ type: Buffer, data: [XX,XX,XX,XX,XX]}`
- write in the buffer. `buf.write('pe');//pello`
- copy one buffer/array string to another.
- compare two buffer.
- concat buffers.
- find length of a string in perticular encoding.
- verifies an object is buffer or not.
- Array supporting metods on buffer objects `console.log(buf[2]); //binary of character 'l'`
- interact with `octate streams in TCP streams`.
- interact with `file system opration`.

## nodejs Buffer API docs

- Instance of Buffer class is **similar to integer Array**, but are fixed-size.

- Buffer **memory is allocated when it is created** and cant be changed.

- Below you can see that **new Buffer()** return different type of Buffer based on the parameter passed, this may cause security vulnerability and error on code. Hence, node have depricated many Buffer constructors. Developer are advice to remove all the `new Buffer()` and replace with new APIs (`Buffer.from(),`Buffer.alloc()`,`Buffer.allocUnsafe()`).
  - `Buffer(10)` or `new Buffer(10)` will return a Buffer with initialized memory.
  - If first argument is `String`, `Array`, `Buffer` to Buffer constructor, will copy the data in the new Buffer created. However if first argument is `ArrayBuffer` or `SharedArrayBuffer` then it returns a Buffer which shares memory with `ArrayBuffer` or `SharedArrayBuffer`.

  - character set supprted by nodejs:
    - ascii, utf8(default), utf16le, ucs2, base64, latin1, binary, hex