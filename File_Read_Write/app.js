let fs = require('fs');
// Require A Fs Library
let r = fs.readFileSync('Read.txt','utf8');
//Read a file 
fs.writeFileSync('write.txt',r,'utf8');
//Write a file 
fs.appendFileSync('write.txt','Some Extra Text','utf8');
//Apending/Updating a file 
fs.renameSync('write.txt','Write.txt','utf8');
//Rename a File 
