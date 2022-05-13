let fs = require('fs');
//console.log(fs);

fs.readFile(process.argv[2],function(err,cont){
    var lines = cont.toString().split('\n').length-1 ;
    console.log(lines)



}) 
