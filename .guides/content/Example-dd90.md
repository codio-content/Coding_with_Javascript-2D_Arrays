On the left is a file with some data in it. Each line represents information stored on a person.

Let's see this data represented in a table.

| | C0 | C1 | C2 | C3
|-|-|-|-|-|
|R0| 'Alice' | 23 | 'Blue' | 'Audi' |
|R1| 'Tariq' | 18 | 'Red' | 'Mini' |
|R2| 'Bob' | 31 | 'Green' | 'Renault' |

Now you can clearly see the 2 dimensional nature of this data.

- Alice's data is in row 0, Bob's is in row 2
- Names are in column 0 and cars are in column 3

If this data were stored in an array, each person's data would look like this

```javascript
people[0] = ['Alice',23,'Blue','Audi']
people[1] = ['Tariq',18,'Red','Mini']
people[2] = ['Bob',31,'Green','Renault']
```

You can now see that each array element people[n] contains another array.

And finally you can get individual bits of information like this.

```javascript
car = people[0][3]  // 'Audi'
age = people[2][1]  // 31
```
