/* 
Buffer.from(array);
Buffer.from(Buffer);
Buffer.from(string [, encoding]);
Buffer.from(ArrayBuffer [, encoding] [,length]);
Buffer.alloc()
Buffer.allocUnsafe()
Buffer.allocUnsafeSlow()
*/
// buffer from
console.log('// ------ Buffer.from()------');
const myBufferArr = Buffer.from([10, 20]); // in case of array only value is considered, encoding and length are ignored if passed.
const myBufferStr = Buffer.from('Abhishek'); // in case of string value and encoding is passed, length is ignored if passed.
// const myBufferArrBuffer = Buffer.from(); //to do

console.log(myBufferArr); // <Buffer 0a 14>
console.log(myBufferArr[0]); // 10
console.log(myBufferStr); //Buffer 41 62 68 69 73 68 65 6b

// buffer alloc
console.log('// ------ Buffer.alloc()------');
const initializedBuffer1 = Buffer.alloc(2); // the buffer octates are initialized to 00000000
const initializedBuffer2 = Buffer.alloc(2,'a'); // all the memory octates are filled with 'a'
const initializedBuffer3 = Buffer.alloc(4, 'am', 'ascii'); // all the memory is filled with 'am' sequence and encoding is ascii

console.log(initializedBuffer1);
console.log(initializedBuffer2);
console.log(initializedBuffer3);

// buffer allocUnsafe and allocUnsafeSlow
console.log('// ------ Buffer.allocUnsafe()------');
const uninitializedBuffer = Buffer.allocUnsafe(2); // the buffer octates are uninitialized
const uninitializedBufferSlow = Buffer.allocUnsafeSlow(2); // will  not be in shared internal memory pool 
console.log(uninitializedBuffer);
console.log(uninitializedBufferSlow);

// byte consumed by the string
// only accept string, else Type Error is thrown
console.log('// ------ Buffer.byteLength()------');
const firstName = 'Abhishek';
const emptyString = "";

console.log(Buffer.byteLength(firstName)); // 8
console.log(Buffer.byteLength(firstName, 'ucs2')); // 16
console.log(Buffer.byteLength(firstName, 'hex')); // 4
console.log(Buffer.byteLength(firstName, 'base64')); // 6
console.log(Buffer.byteLength(emptyString,'ucs2')); // 0

// is buffer
console.log('// ------ Buffer.isBuffer()------');
const bufferObj = Buffer.alloc(2);
let isBuffer = Buffer.isBuffer(bufferObj); //verifies instanceof Buffer
console.log(isBuffer);