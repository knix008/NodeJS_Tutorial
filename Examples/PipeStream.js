import { createReadStream, createWriteStream } from "fs";

// Create a readable stream
var readerStream = createReadStream('input.txt');

// Create a writable stream
var writerStream = createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
