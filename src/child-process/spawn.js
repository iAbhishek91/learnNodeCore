const cp = require('child_process');

const child = cp.spawn(
  process.execPath,
  ['-v'],
  {
    stdio: ['inherit', 'inherit', 'inherit'],
    env: {},
  },
);

//child.stdout.on('data', (data) => console.log(data.toString()));