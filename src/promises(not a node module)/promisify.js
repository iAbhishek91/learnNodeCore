// Promise implements reveal constructor
// in reveal constructor pattern reveals a constructor
// the constructor consumes a function known as executor.
// executor function executed by Promise before the Promise object is returned.
// generally in case of Promise, the executor function generate a async work.
// once the async work is complete the resolve function is called.
// in case of error the reject function is called.
function async () {
  process.nextTick((err) => {
    if (err) {
      throw err.message;
    }
    console.log('no error');
  })
};

function promisify (callbackBasedApi) {
  return function promisified() {
    const args = Object.values(arguments);
    console.log(args);

    const executor = (resolve, reject) => {
      // async work
      setTimeout(() => {
        console.log('a async function');
      });

      //
    };
    return new Promise(executor);
  }
};

promisify(async)();
