{Check It!|assessment}(test-2304874676)


|||guidance
### Solution
```javascript
// Load the 2D Array from command line arguments
var inputArray= []
var inputDigits= process.argv.slice(2)
var arrayColumnCount= inputDigits.shift()
while(inputDigits.length >= arrayColumnCount){
  inputArray.push(inputDigits.splice(0,arrayColumnCount));
}

// Your code goes here
console.log(inputArray[1][2])
```
|||