people = [ ['Name', 'Age', 'Color', 'Car'], ['Alice',23,'Blue','Audi'],
['Tariq',18,'Red','Mini'], ['Bob',31,'Green','Renault'] ]

for (i=1; i < people.length; i++ ) {
  
  for (j=0, str=''; j < people[i].length; j++ ) {
    str += people[0][j] + '=' + people[i][j] + ' '
  }
  console.log(str)
}