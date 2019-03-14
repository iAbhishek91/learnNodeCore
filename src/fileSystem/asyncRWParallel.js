const fs = require('fs');
const path = require('path');

// this function reads all the files from the directory
const dirPath = path.join(__dirname,'srcFiles');

fs.readdir(dirPath, (err, files) => { // [1]
  if(err) throw err;
  files.forEach((file) => readFile(path.join(dirPath, file))); // [2]
});

function readFile (file) {
  fs.readFile(file, 'utf8', (err, data) => { // [3]
    if (err) throw err;
    console.log(data);
  });
}

// [1]: readdir is a async function

// [2]: forEach is synchronous and always executes things in sequence.
// however the function executed inside is async will go to eventloop to be executed for later processing
// hence in a way we can define this as async process.

// [3]: readFile is again a async function
// which will be passed to seq demux for async to be completed.
// once done it is passed to the event queue and is processed by event loop later.
// In total there will be 5 async readFile call will be there for event queue.