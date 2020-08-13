let fs = require('fs');
let r = fs.readFileSync('Read.txt','utf8');
let w = fs.writeFileSync('write.txt',r,'utf8');
