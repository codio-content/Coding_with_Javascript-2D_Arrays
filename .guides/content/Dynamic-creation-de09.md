{Check It!|assessment}(test-667129063)

|||guidance
### Solution
```javascript

// Get our command line arguments
B = process.argv.pop()
A = process.argv.pop()
array = []

// Your code goes here
for (var i=0; i < A; i++ ) {
  array[i] = []
  for (var j=0; j < B; j++ ) {
    array[i][j] = 'R' + i + 'C' + j
  }
}
console.log(array)
```
|||