console.log("-------------async inside callback ------------");
const asyncFunc = () => {
  setTimeout(() => {
    console.log("async async");
  });
}

function primaryFunc(callback) {
  console.log("before async callback");
  callback();
  console.log("after async callback");
}

primaryFunc(asyncFunc);

console.log("------------async before callback---------------------");
const asyncFunc1 = () => {
  console.log("async async");
}

function primaryFunc1(callback) {
  setTimeout(() => {
    console.log("before async callback");
  });
  callback();
  console.log("after async callback");
}

primaryFunc1(asyncFunc1);


