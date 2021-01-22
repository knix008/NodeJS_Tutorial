var buf = Buffer.alloc('Simply Easy Learning'.length);
buf.write('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);
