
// Load the 2D Array from command line arguments
input0= []
var inputDigits= process.argv.slice(2)
var arrayColumnCount= inputDigits.shift()
while(inputDigits.length >= arrayColumnCount){
  input0.push(inputDigits.splice(0,arrayColumnCount));
}

// Your code goes here
console.log(input0[1][2])
