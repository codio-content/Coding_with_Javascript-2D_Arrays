
var test = require('./test-fw.js');

test.tests('/home/codio/workspace/easy.js', [{
    inputs: [ [ [1, 2, 3, 4, 5], [9, 8, 7, 6, 5], [11, 22, 33, 44, 55] ]],
    outputs: [7],
  }, {
    inputs: [ [ [], [1, 2, 4], [] ]],
    outputs: [4],
  }
]);
