// the below profiler is used to calculate the time of a sync process.

class Profiler {
  constructor(label) {
    this.lastTime = null;
    this.label = '';
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`Label: ${this.label}, took ${diff}`);
  }
}

const profilerFactory = (label) => {
  return new Profiler(label);
}

module.exports = { profilerFactory}