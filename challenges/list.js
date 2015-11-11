
// Get input from the command line arguments
var inputArray= process.argv.slice(2)

// Your code goes here


// Initialize a grand total counter
var gtotal= 0

// for each row
for ( var row=0; row < inputArray.length; row++ ) {
  // total this row up
  var rowTotal= 0
  for ( var col=0; col < inputArray[row].length; col++ ) {
    // add this element to the row total
    rowTotal += inputArray[row][col]
  }
  // output this row total
  console.log(rowTotal)
  
  // add this row to the grand total
  gtotal += parseInt(rowTotal)
}
// output the grand total
console.log(gtotal)