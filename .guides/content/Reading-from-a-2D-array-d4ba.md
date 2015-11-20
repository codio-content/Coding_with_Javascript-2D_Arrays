{Run the code}(node content/1-overview/read.js)

On the left we have some code that does the following:

## Define an Array
```javascript
2  var desks= []
```
Now, the create a 2d array, we fill the regular array `desks` with array for each element.

## Populate the array
There are a number of equivalent ways to populate the same 2d array.

In our sample code, we do it like this:

```javascript
7  desks[0]= ['Adam', 'Ben', 'Carl', 'David']
8  desks[1]= ['Edward', 'Frank', 'Georgia', 'Helen']
9  desks[2]= ['Isabelle', 'Joan', 'Kelly', 'Linda']
```

We could have done it like this, starting directly with an array of arrays:

```javascript
desks= [
        ['Adam', 'Ben', 'Carl', 'David'],
        ['Edward', 'Frank', 'Georgia', 'Helen'],
        ['Isabelle', 'Joan', 'Kelly', 'Linda']
];
```

The entire declaration from above could go on a single line:
```javascript
var desks= [['Adam', 'Ben', 'Carl', 'David'],['Edward', 'Frank', 'Georgia', 'Helen'],['Isabelle', 'Joan', 'Kelly', 'Linda']];
```
... but we added the line breaks to make it more readable.



## Lengths
Notice that in the outer loop, we use `row < desks.length`. This tells us the length of the first dimension.

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

