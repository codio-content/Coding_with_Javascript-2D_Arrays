
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/challenges/list.js', [{
    inputs: [4, 1,2,3,4, 9,8,7,6, 11,12,'','' ],
    outputs: [10,30,23,63], 
  },  {
    inputs: [3, 1,1,-2, -1,-2,-3, 1, 1, 1],
    outputs: [0,-6,3,-3],
    message: 'Your code is not adding up negative numbers correctly'
  }
]);
