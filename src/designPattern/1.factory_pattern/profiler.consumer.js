const { profilerFactory } = require('./profiler');

const abhiProfiler = profilerFactory('abhi');

abhiProfiler.start();
// should be sync code
for(let i = 0; i < 900000; i+=1) {
  
}

abhiProfiler.end();