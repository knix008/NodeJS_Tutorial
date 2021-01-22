// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname
console.log( __dirname );

// setTimeout()
function printHello() {
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t1 = setTimeout(printHello, 2000);

// clearTimeout()
clearTimeout(t1);

//setInterval()
var t2 = setInterval(printHello, 2000);

// clearTimeout()
clearTimeout(t2);

console.log("Global Object Demo Done.");
process.exit();