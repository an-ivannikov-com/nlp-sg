const fs = require('fs');
const glob = require('glob');



glob('**/*.html', {}, (err, files) => { //
  files.forEach((path) => {
    const html = fs.readFileSync(path, { encoding: 'utf8' });
  });
  console.log('**/*.html - done');
});

glob('**/*.dat', {}, (err, files) => {
  files.forEach((path) => {
    const html = fs.readFileSync(path, { encoding: 'utf8' });
  });
  console.log('**/*.dat - done');
});
