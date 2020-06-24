const fs = require('fs');
const Iconv = require('iconv').Iconv;



const path = 'Res/ReadMe.txt';
const options = {
  encoding: 'binary', // 'buffer' 'utf8'
  flag: 'r'
};
const data = fs.readFileSync(path, options);


const buf = new Buffer(data, 'binary');
const conv = Iconv('windows-1251', 'utf8');
const body = conv.convert(buf).toString();


console.log(body)
fs.writeFileSync(path, body);
