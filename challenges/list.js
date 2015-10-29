
// Load the 2D Array from command line arguments
var inputArray= []
var inputDigits= process.argv.slice(2)
var arrayColumnCount= inputDigits.shift()
while(inputDigits.length >= arrayColumnCount){
  inputArray.push(inputDigits.splice(0,arrayColumnCount));
}

// inputArray holds the 2d array passed in

// Your code goes here
