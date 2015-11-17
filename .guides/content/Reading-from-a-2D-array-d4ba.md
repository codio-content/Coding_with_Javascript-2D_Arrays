{Run the code}(node content/1-overview/read.js)

On the left we have some code that does the following.

## Define and populate an array
```javascript
var desks= [
        ['Adam', 'Ben', 'Carl', 'David'],
        ['Edward', 'Frank', 'Georgia', 'Helen'],
        ['Isabelle', 'Joan', 'Kelly', 'Linda']
];
```

There is no need to write this array like this. It could all be on one line but we added the line breaks to make it more readable.

## Lengths
Notice that in the outer loop, we use `row < desks.length`. This tells us the length of the first dimension.

For the inner loop, we use `columns < desks[row].length`. This tells us the length of the internal array for row `row`, in other words, the number of columns in the current row.


## Loop through everything
You can see that we actually have a *nested loop* inside another loop.

```javascript
for(var row= 0; row < desks.length; row++){
```
- The first loop iterates through each *row*. So when it enters the loop for the first time, it is grabbing data for the first row.

```javascript
  for(var column= 0; column < desks[row].length; column++){
```
- The second loop then loops through all the *columns*.

## Reference an element
If we reference the array `var name= desks[1][2]` the variable `name` will now contain the text `’Georgia’`.

