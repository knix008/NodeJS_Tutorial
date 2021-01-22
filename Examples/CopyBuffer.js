var buffer1 = Buffer.from('ABC');

//copy a buffer
var buffer2 = Buffer.alloc(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
