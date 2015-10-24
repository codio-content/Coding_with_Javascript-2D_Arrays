{Check It!|assessment}(test-3455473410)


|||guidance
### Solution
```javascript
// Initialize a grand total counter
var gtotal= 0

// for each row
for ( var row=0; row < input0.length; row++ ) {
  // total this row up
  var rowTotal= 0
  for ( var col=0; col < input0[row].length; col++ ) {
    // add this element to the row total
    rowTotal += input0[row][col]
  }
  // output this row total
  console.log(rowTotal)
  
  // add this row to the grand total
  gtotal += parseInt(rowTotal)
}
// output the grand total
console.log(gtotal)

```
|||