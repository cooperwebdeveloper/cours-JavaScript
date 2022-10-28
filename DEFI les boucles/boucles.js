let total = 0
	
while (total < 10) {
		 total++
		 console.log(total)
}
	
do {
	      total++
  		  console.log(total)
} while (total < 10)

console.log('-------------------')

//exercice for..of for...in

for (i = 0; i < 6; i++){
  console.log(i);
}

console.log('-------------------')

const word = 'javascript';

for (letter of word){
  console.log(letter);
}

console.log('------------------')

while (word[i]){
  i++;
  
}
console.log(i);

console.log('********************************')

let row;
for (let i = 0; i <= 10; i++){
  row = ' ';
  for (let j = 0; j< i; j++){
    row += j + ' ' ;
    }
  
  console.log(row)
}

console.log('***************************************');

//Exercice DEFI BOUCLES ET ITERATIONS
//afficher les tables de multiplication  //jai reussi toute seule du premier coup!

for (let i = 1; i <= 10; i++){
  console.log('=== table de ' + i + ' ===')
  for (let y = 1; y <= 10; y++){
    console.log(i + 'x' + y + ' = ' + i*y)
  }
}
