{Run the code}(node content/1-overview/read.js)

Have a look at the code on the left. This is what it does:

## Define an array
```javascript
2  var desks= []
```
To create a 2D array, we fill the regular array `desks` with an array for each element.

## Populate the array
There are a number of equivalent ways to populate the same 2D array.

In the sample code, the 2D array has been populated like this:

```javascript
7  desks[0]= ['Adam', 'Ben', 'Carl', 'David']
8  desks[1]= ['Edward', 'Frank', 'Georgia', 'Helen']
9  desks[2]= ['Isabelle', 'Joan', 'Kelly', 'Linda']
```

Another way to populate the 2D array would be like this, using an array of arrays:

```javascript
desks= [
        ['Adam', 'Ben', 'Carl', 'David'],
        ['Edward', 'Frank', 'Georgia', 'Helen'],
        ['Isabelle', 'Joan', 'Kelly', 'Linda']
];
```

To make it simpler, everything in the example above could go on a single line, then the code would look like this:
```javascript
var desks= [['Adam', 'Ben', 'Carl', 'David'],['Edward', 'Frank', 'Georgia', 'Helen'],['Isabelle', 'Joan', 'Kelly', 'Linda']];
```



## Lengths
Have a look at the outer loop, it uses `row < desks.length`. This tells us the length of the first dimension.

```javascript
12  for(var row= 0; row < desks.length; row++){
```

For the inner loop, we use `column < desks[row].length`. 

```javascript
14    for(var column= 0; column < desks[row].length; column++){
```

This tells us the length of the internal array for row `row`, in other words, the number of columns in the current row.


## Loop through everything
You can see that we actually have a *nested loop* inside another loop.

```javascript
12  for(var row= 0; row < desks.length; row++){
```
- The first loop iterates through each *row*. So when it enters the loop for the first time, it is grabbing data for the first row.

```javascript
14  for(var column= 0; column < desks[row].length; column++){
```
- The second loop then loops through all the *columns*.

## Reference an element
If we reference the array as `desks[1][2]` we will get the value  `’Georgia’`. In this section we reference the row and column we want to print.
```javascript
15  console.log('row[' +row+ ']col[' +column+ ']= ' +desks[row][column]);
```

