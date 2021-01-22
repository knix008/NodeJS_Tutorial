buf = new Buffer(256);
len = buf.write("Simply Easy Learning - 01");
console.log("Octets written : "+  len);

buf = Buffer.alloc(256);
len = buf.write("Simply Easy Learning - 02");
console.log("Octets written : "+  len);
