// aborts the current node js process
// generates core file (need to understand)
// is not avaiable in worker thread

console.log('before');
process.abort();
console.log('after');