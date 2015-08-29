array = []
rows = 5
cols = 4

for ( i=0; i < rows; i++ ) {
  array[i] = []
  for (j=0; j < cols; j++ ) {
    array[i][j] = i + ',' + j
  }
}
console.log(array)