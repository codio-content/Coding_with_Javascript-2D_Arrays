{Run the code}(node run-user.js list.js)

{Check It!|assessment}(test-3455473410)


|||guidance
### Solution
```javascript
input0 = [ [1,2,3,4], [9,8,7,6], [11, 12] ]

for ( i=0, gtotal=0; i < input0.length; i++ ) {
  for ( j=0, total=0; j < input0[i].length; j++ ) {
    total += input0[i][j]
  }
  output(total)
  gtotal += total
}

output(gtotal)
```
|||