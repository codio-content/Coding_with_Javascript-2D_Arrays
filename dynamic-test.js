
var test = require('./test-fw.js');

var script = '/home/codio/workspace/dynamic.js'
var inputs = [2,3];
var expected = [ [ 'R0C0', 'R0C1', 'R0C2' ], [ 'R1C0', 'R1C1', 'R1C2' ] ];
    
test.test(script, inputs, function(output, err) {
  if(err || output.length == 0) {
    console.log('Not quite right please try again.');
    process.exit(1); 
  }
  
  output = output[0];
  
//   console.log(output)
//   console.log(expected)
  
  for(var r = 0; r < expected.length; r++) {
    for(var c = 0; c < expected[r].length; c++) {
      if(typeof output[r] == 'undefined' || typeof output[r][c] == 'undefined' || output[r][c] != expected[r][c]) {
        console.log('Not quite right please try again.');
        process.exit(1); 
      }      
    }
  }
  
  console.log('Well done!');
  process.exit(0); 
});
