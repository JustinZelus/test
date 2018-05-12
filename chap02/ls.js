var fs = require('fs');
var dir = 'chap02/';
console.log(process.argv[2]);
if(process.argv[2]) 
  dir = process.argv[2];
var files = fs.readdirSync(dir);

for(fn in files) {
	console.log(files[fn]);

}
process.argv.forEach(function(val,index,array){
	console.log(index + ': ' + val)
});