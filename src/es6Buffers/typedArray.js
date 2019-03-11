// ----------------Int8Array----------------
// is one of the TypedArray
// represent two complement 8-bit signed integers
// every instance is initialized with 0
let typedArray1 = new Int8Array(8);
typedArray1 = [1,2,'bajkljkj','c',5,6];
console.log(`length of typedArray ${typedArray1.length}`);
console.log(`value of first array index: ${typedArray1[0]}`);
console.log(`value in the array ${typedArray1}`);

//properties
typedArray1[0] = 32;
console.log(typedArray1[0]);
console.log(typedArray1.BYTES_PER_ELEMENT);

//methods
//creates an array from iterable object
const typedArray2 = Int8Array.from(['a', 1, 2]);
console.log(typedArray2);
