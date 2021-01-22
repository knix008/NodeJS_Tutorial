var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("tmp",function(err) {
    if (err) {
       return console.error(err);
    }
    console.log("Going to read directory /tmp");
    
    fs.readdir("tmp",function(err, files) {
       if (err) {
          return console.error(err);
       }
       files.forEach( function (file) {
          console.log( file );
       });
    });
 });
