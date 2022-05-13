let fs = require('fs');
//console.log(fs);

var content = fs.readFileSync(process.argv[2]) 
var lines = content.toString().split('\n').length-1 ;
console.log(lines)
//console.log(content)






//fs.readFileSync(process.argv[2], function (err, data) {
  //  if (err) {
    //    console.log((err))

    //}
    //console.log(data.split('\n').length-1 );
//})


