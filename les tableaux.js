let animals = [
    ['Lion', 'Tigre', 'Ours'],
    ['Chat', 'Chien', 'Cheval']
  ]
  
  animals.forEach(function(animalsElement){
    animalsElement.forEach(function(element){
      console.log(element)
    })
  })
  
  console.log('************************')
  
  //Appliquer la notion
  
  let fruits = ['Fraise', 'Orange', 'Framboise', 'Citron']
  // afficher la longueur du tableau dans la console:
  console.log(fruits.length)
  //Afficher la valeur framboise directement
  console.log(fruits[2])
  console.log('***********')
  //Afficher les elements du array fruits
  //methode boucle for
  for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
  }
  console.log('************')
  //methode forEach
  fruits.forEach(function(fruitsElement){
    console.log(fruitsElement)
  })


  //        TRI A BULLES         //

let numbers = [6, 12, 7, 4, 32, 21, 2, 10, 8, 30, 5, 16, 9];
let numbersLength = numbers.length;
for (let main = 0; main < numbers.length - 1; main++) {
	for (let cell = 0; cell < numbers.length - main - 1; cell++) {
	  if (numbers[cell] > numbers[cell + 1]) { // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables)
     numbers[cell] = numbers[cell] + numbers[cell + 1];
		 numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
		 numbers[cell] = numbers[cell] - numbers[cell + 1];
    }
  }
}
console.log(numbers);


//          TRI A BULLES AVEC CH DE CAR        //

let persons = ['jules', 'laure', 'vincent', 'emma'];
let personsLength = persons.length;
		
for (let main = 0; main < personsLength - 1; main++) {
  for (let cell = 0; cell < personsLength - main - 1; cell++) {
    if (persons[cell] > persons[cell + 1]) {

     let temp;
     temp = persons[cell];
     persons[cell] = persons[cell + 1];
     persons[cell + 1] = temp;
    }
  }
}
console.log(persons);

///////////////////////////////////////////////////////////////////////////////////////

//                              defi                                                //



let colors = ['bleu', 'Rouge', 'Vert', 'Jaune', 'Blanc']

// Faire afifcher dans la console la longueur du tableau:

console.log(colors.length)

// Faire afficher directement les valeurs Bleu Blanc puis rouge

console.log(colors[0],colors[4],colors[1])

//Faire afficher toutes les valeurs du tableau de deux manieres differentes:
// for

for (let i = 0; i<colors.length; i++){
  console.log(colors[i])
}

//forEach
console.log('********avec forEach**********')

colors.forEach(function(color){
  console.log(color)
})

// Faire deux tableaux dans un tableau

let newColors = [
  ['bleu', 'Blanc', 'Rouge'],
  ['Vert', 'Jaune']
];

// a partir de ce nouveau tableau afficher blanc puis vert

console.log(newColors[0][1], newColors[1][0]);

//afficher toutes les valeurs de ce nouveau tableau

newColors.forEach(function(newColor){
  newColor.forEach(function(colorElement){
    console.log(colorElement)
  })
})

// idem mais avec for (2 variables)

for (i=0; i < newColors.length; i++){
  for (y=0; y < newColors[i].length; y++){
    console.log(newColors[i][y])
  }
}


// REUSSI