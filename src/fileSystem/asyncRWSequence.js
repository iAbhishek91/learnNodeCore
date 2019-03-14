const fs = require('fs');
const path = require('path');

// below function is async
// this function reads all the files from the directory
const dirPath = path.join(__dirname,'srcFiles');

function readDir (callback) {
  fs.readdir(dirPath, (err, files) => { // [1]
    if(err) throw err;
    console.log(files);

    function iterator (index) { // [2]
      if (index === files.length) {
        console.log('iteration over all the files are completed');
        return;
      }

      readFile(path.join(dirPath, files[index]), (err, data) => {
        if (err) return callback(err);
        iterator(index + 1);
      });
    }

    iterator(0); // bootstrap
  });
}

function readFile (file ,callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return callback(err);
    console.log(data);
    callback();
  });
}

readDir(undefined, 2, () => {});
