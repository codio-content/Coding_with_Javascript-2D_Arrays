// Create an empty array first
// This gives us our first dimension
array = []

// A couple of variables for fun
rows = 5
cols = 4

// We work through the rows first, dimension 1
for ( i=0; i < rows; i++ ) {
  // Make array[i] an empty array
  // This is the 2nd dimension
  array[i] = []
  for (j=0; j < cols; j++ ) {
    // Now we can write to a 'cell'
    // You could read [i] as the row
    // and [j] as the column
    array[i][j] = i + ',' + j
  }
}
console.log(array)