
input0 = 5
input1 = 8
array = []

for ( i=0; i < input0; i++ ) {
  array[i] = []
  for (j=0; j < input1; j++ ) {
    array[i][j] = 'R' + i + 'C' + j
  }
}

output(array)
