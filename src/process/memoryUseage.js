const { rss, heapTotal, heapUsed, external } =  process.memoryUsage();

const convertToMB = (byte) => byte / (1024 * 1024);

const array = [10, 20, 30, 40, 50];
array.reverse();

console.log(`rss: ${convertToMB(rss)} mb`);
console.log(`heapTotal: ${convertToMB(heapTotal)} mb`);
console.log(`heapUsed: ${convertToMB(heapUsed)} mb`);
console.log(`external: ${convertToMB(external)} mb`);


// example of array operation
const a = Array(3).fill({}, 0, 3);
a[0].name = "abhishek"; // object by reference
console.log(a);