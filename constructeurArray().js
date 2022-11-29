//METHODES PERMETTANT DE PARCOURIR UN TABLEAU

let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours'];

// instruction for et la propriete length: indique le nombre d'elements contenus dans un tableau

console.log(animals.length); //Display (6) in the console

for (let i=0; i < animals.length; i++) {
    console.log(animals[i]) // Display the value of the display at index i in the console 
}

//La methode forEach : permet d'executer une fonction sur chaque elemnt du tableaux

animals.forEach(function(element){
    console.log(element) // Display each Array element in the console
})

animals.forEach(function(element, index){
    console.log(index + ' : ' + element) //Display each Array index and hies element in the console 
})

//la METHODE EVERY : s'applique sur l'ENSEMBLE DES ELEMENTS D'UN TABLEAU
function isGreaterThanZero(element){
    return element > 0
}
let numbers = [0, 9, 5, 4, 6, 8, 2]

console.log(numbers.every(isGreaterThanZero)) //Display FALSE because ALL numbers are not strictly greater than 0 (0 ins't)

console.log(numbers.every(function(element){
    return element >= 0  //Display TRUE because ALL elements 
}))

//La methode some() : renvoie true si AU MOINS UN des elements du tableau  remplit la condition 

function isGreaterThenZero(element){
    return element > 0 
}

console.log(numbers.some(isGreaterThanZero)) //Display tru e in the console because at least one number is tricttly greater than zero

   
console.log(numbers.some(function(element) {
    return element < 0
}))  // Display False because there is not at least one element strictly  inferior to zero


// La methode map() renvoie un nouveau tableau contenant uniquement les valeurs pour lesquelles la fonction en parametre a renvoyé TRUE
//Rappel  let numbers = [0, 9, 5, 4, 6, 8, 2]

function squareNumber(number){
    return number * number  // renvoie le carre de number
}

// Create a new array containing sqared numbers:
let squaredNumbers = numbers.map(squareNumber)

//Create a new array containing numbers divided by 2  from the sqaredNumbers array:
let otherNumbers = squaredNumbers.map(function(element){
    return element / 2
})
console.log(squaredNumbers) // [0, 81, 25, 16, 36, 64, 4]

console.log(otherNumbers) // [0, 40.5, 12.5, 8, 18, 32, 2]

// La methode reduce() : a partir d'une fonction passee en parametre, va reduire la liste de valeurs a une valeur unique 
// /!\ les valeurs sont lues de gauche a droite (Pour inverser il faut utiliser reduceRight())
//La fonction passee en parametre de la methode reduce prend 2 parametres : 
//accumulator [valeur retournee lors du dernier appel de la fonction, valeur accumulee au fur et a mesure que le tableau est parcouru] 
//et currentValue [Valeur en cours de traitement]
//Cette methode peut eventuellement prendre une un deuxieme parametre qui est une valeur de depart et qui sera utilisee avant la premiere valeur du tableau
//dans le cas d'une addition on renseigne le plus souvent ce parametre a 0
// Cette methode retourne donc une seule valeur

function sumReducer(accumulator, currentValue){
    return accumulator + currentValue
}
 // rappel let numbers = [0, 9, 5, 4, 6, 8, 2]

 console.log(numbers.reduce(sumReducer)) // 34

 console.log(numbers.reduce(sumReducer,  6)) //40

 console.log(numbers.reduce(function(accumulator, currentValue) {
    return accumulator - currentValue
  })) //Display -34 

  console.log(numbers.reduce(function(accumulator, currentValue) {
    return accumulator - currentValue
  }, 100)) //Display 66 because initial value is 100

  // /!\ A RETENIR 
//   length  = nombre d elements dans un tableau
//   for = instruction pour creer une boucle 
//   forEach()= execute une fonction sur chaque element du tableau
//   every()= parcourt le tableau et renvoie true si tous les elements remplissent une condition donnee dans une fonction passee en parametre sinon false
//   some()= renvoie true si Aumoins un des elements remplit une condition donnee dans une fonction passee en parametre sinon false
//   map()= cree un nouveau tableau contenant les valeurs retournees par la fonction passee en parametre
//   reduce()= a partir d'une fonction passee en parametre va reduire la liste des valeurs a une valeur unique

//Video

const ages = [14, 27, 65, 18, 94, 6]
let majority = true;

ages.forEach( age => {
    if (age < 18) {
        majority = false;
    }
})

console.log(majority) // ici ca renvoi false car il y a des ages inferieurs a 18 ans 
// mais c tres gourmand en memoire car parcourt tout le tableau meme si le premier est inferieur a 18

//On va plutot utiliser every()
console.log(ages.every(age => age > 18)); // affiche aussi false car tous les ages ne sont pas superieur a 18
console.log(ages.some(age => age > 18)); // affiche true car aumoins un age est inferieur a 18

// exemple de tableau contenant des objets qui sont des films avec titre annee et note

let movies = [
    {
        title: 'King Kong',
        year: '1933',
        rating: 98
    },
    {
        title: 'Citizen Kane',
        year: '1941',
        rating: 100
    },
    {
        title: 'Modern Times',
        year: '1936',
        rating: 100
    },
    {
        title: 'The Wizard Of Oz',
        year: '1939',
        rating: 98
    }
];

// je veux creer un autre tableau avec juste le titre des films

// je cree une constante avec le titre des films
const movieTitles = movies.map(movie => {
    return movie.title;
})
console.log(movieTitles); //affiche un nouveau tableau sans alterer lancien tableau


// Utiliser reduce()
// exemple pour calculer le montant total dun panier

const cart = [
    {
        designation: 'Pomme',
        unitPrice : 0.5,
        units: 6
    },
    {
        designation: 'Chou-fleur',
        unitPrice : 0.97,
        units: 2
    },
    {
        designation: 'Orange',
        unitPrice : 1.15,
        units: 4
    }
];

// reduce va nous servir a calculer le resultat du panier

console.log(
    cart.reduce((accumulator, currentValue) => accumulator + currentValue.unitPrice * currentValue.units, 0) //par habitude on met 0 a chaque demarrage dune addition
)

//***METHODES NATIVES POUR TROUVER TRIER ET FILTRER ***/

//La methode find() retourne la premiere valeur trouvee qui correspond a une condition donnee
//cette condition est passee en parametre sous la forme d'une fonction
//si aucune valeur ne respecte la condition alors la methode renvoit undefined

function isGreaterThanTen(element){
    return element > 10
}
let numbers1 = [0, 9, 51, 100, 6, 18, 2]
console.log(numbers1.find(isGreaterThanTen)) // display 51 in the console because there is the first value found to be greater than 10

// La methode findIndex() idem que find sauf quelle va retourner l'index de la premiere valeur trouvee
//si aucune valeur ne respecte la condition alors la methode renvoie : -1
// attention au fait que la fonction renvoie -1 car peut etre source de bugs 
function isGreaterThanTen(element) {
    return element > 10   
}
console.log(numbers1.findIndex(isGreaterThanTen)) // display 2 because it is the index of 51 wich is the first value  found to be greater than 10

//La methode indexOf() a la difference de findIndex() ici on ne passe pas de fonction mais directement l'element recherche si pas trouve affiche -1
// Cette methode accepte un deuxieme parametre permettant de preciser l' index de depart 

let animals3 = ['Lion', 'Chat', 'Chien', 'Lion', 'Ours']

// Display 0 in the console because the first 'Lion' value found is at index 0, even if there is a second one at index 3.
console.log(animals3.indexOf('Lion'))

// Display 3 in the console because the first 'Lion' value found when starting to browse from the index 2 is at index 3.
console.log(animals3.indexOf('Lion', 2))

//La methode lastIndexOf() similaire a indexOf sauf quelle renvoit l'index du dernier element trouve correspondant a l' element recherche passe en parametre
//  si pas trouve renvoit -1
//   /!\ CETTE METHODE PARCOURT LE TABLEAU A L'ENVERS mais les valeurs gardent leur index d'origine, si on rajoute un deuxieme parametre on peut preciser l'index de depart afin que la recherche ne demarre pas par la fin du tableau
//mais va quand meme parcourir le tableau de droite a gauche!!

let animals2 = ['Lion', 'Chat', 'Chien', 'Lion', 'Ours']

// Display 3 in the console because the last 'Lion' value found is at index 3.
console.log(animals2.lastIndexOf('Lion'))

// Display 0 in the console because the last 'Lion' value found when starting to browse from the index 1 is at index 0.
// As the search is from right to left and starts at index 1 ('Chat') then the last 'Lion' value found is at index 0.
console.log(animals2.lastIndexOf('Lion', 1))

//La methode sort() ne s'utilise que pour des chaines de caracteres va renvoyer le meme tableau trié 
//sort() peut eventuellement pendre en parametre une fonction de comparaison des elements permettant de determiner l'ordre de tri de cette maniere nous pouvons comparer des nombres
// Cette fonction de comparaison prend deux arguments en parametres le premier element a  et le deuxieme element b à comparer 

let animals1 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

let numbers2 = [0, 900, 1000, 11, 40, 6, 8, 2, 61]

// Display in the console : ['Chat', 'Cheval', 'Chien', 'Lion', 'Ours', 'Tigre'] trie par ordre alphabetique
console.log(animals1.sort())

// Display in the console : [0, 1000, 11, 2, 40, 6, 61, 8, 900]
console.log(numbers2.sort())

// Function for comparing the length of strings in order to sort them in ascending order
function compareTextLength(a, b) {
  if (a.length > b.length) {
    return 1
  } else if (a.length < b.length) {
    return -1
  }

  // The case where a.length = b.length
  return 0
}

// Display in the console : ['Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval']
// 'Chat' has 4 characters, 'Cheval' has 6
console.log(animals1.sort(compareTextLength))

// Function for comparing numbers in order to sort them in ascending order
function compareNumbers(a, b) {
  return a - b            // cette manipulation permet de dire a JS de considerer les elements du tableau comme des chiffres
}

// Display in the console : [0, 2, 6, 8, 11, 40, 61, 900, 1000]
console.log(numbers2.sort(compareNumbers)) 
//Si le retour de cette fonction est inférieur à 0, alors "a" est trié avec un index inférieur à "b" ; si le retour est supérieur à 0, alors "b" est trié avec un index inférieur à "a" ; si le retour est égal à 0, alors "a" et "b" sont inchangés l'un par rapport à l'autre, mais triés par rapport aux autres éléments.


//La methode filter() cette methode nous retourne un nouveau tableau cree avec les valeurs du tableau d'origine qui repondent a une condition passee en parametre sous la forme d'une fonction
function isTextLengthGreaterThan4(element) {
    return element.length > 4
  }
  
  let animals5 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
  
  let animalsFiltered = animals5.filter(isTextLengthGreaterThan4)
  
  let animalsFilteredBis = animalsFiltered.filter(function(element){
    return element.length > 5
  })
  
  // Display in the console : ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
  console.log(animals5)
  
  // Display in the console : ['Chien', 'Cheval', 'Tigre']
  // Elements from animals with more than 4 characters
  console.log(animalsFiltered)
  
  // Display in the console : ['Cheval']
  // Elements from animalsFiltered with more than 5 characters
  console.log(animalsFilteredBis)


  /*La methode slice()  a 2 parametres facultatifs = le premier est l'index du quel faut commencer l'extraction dans le tableau, s'il est negatif il va extraire a partir de la fin
   Le deuxieme parametre est l'index auquel il faut stopper l'extraction ATTENTION la valeur contenue a cet index ne sera pas inclue dans le tableau renvoyé
  si le deuxieme parametre n'est pas renseigne il va extraire jusqua la fin du tableau 
 le deuxieme parametre peut aussi etre negatif dans ce cas il indique de ne pas integrer les X derniers elements dans l'extraction */
 
 let animals7 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

 // Display in the console : ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
 console.log(animals7.slice())
 
 // Display in the console : ['Tigre', 'Ours']
 console.log(animals7.slice(4))
 
 // Display in the console : ['Cheval', 'Tigre', 'Ours']
 // The first parameter is negative so we extract the last 3 elements.
 console.log(animals7.slice(-3))
 
 // Display in the console : ['Chat', 'Chien']
 // 'Cheval' which is at index 3 is not part of the extraction as indicated in slice() description.
 console.log(animals7.slice(1, 3))
 
 // Display in the console : ['Chat', 'Chien', 'Cheval']
 // The second parameter is negative, so the last 2 values are not part of the extraction.
 console.log(animals7.slice(1, -2))
 
 // Display in the console : ['Chien', 'Cheval']
 // The 2 parameters are negative, so we take the last 4 values (-4) without the last 2 (-2).
 console.log(animals7.slice(-4, -2))
 
 // Display in the console : ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
 // The original array has not been changed.
 console.log(animals7)

 // la methode pop() supprime le dernier element d'un tableau
 //  /!\ ATTENTION cela modifie la longueur du tableau +
 let animals6 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display in the console : 6
console.log(animals6.length)

// Display in the console : Ours
console.log(animals6.pop())

// Display in the console : 5
// Because the last value has been deleted
console.log(animals6.length)

//La methode shift() Supprime le premier element d'un tableau et le retourne la longueur du tableau est modifiee 
let animals4 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display in the console : 6
console.log(animals4.length)

// Display in the console : Lion
console.log(animals4.shift())

// Display in the console : 5
// Because the first value has been deleted
console.log(animals4.length)

//La methode includes() Renvoie la valeur true si la valeur recherchee est presente dans le tableau sinon false 
// Le premier parametre est la valeur que l'on souhaite trouver le deuxieme, facultatif , est l'index a partir du quel il faut commencer a chercher 
let animals9 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display true
console.log(animals9.includes('Ours'))
, 
//, ,  Display false because 'Lion' is at index 0 while we are searching from index 1
console.log(animals9.includes('Lion', 1))

/*************APPLIQUER LA NOTION**************/
let webBrowsers = ['Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Opera', 'Edge']
//QUESTION : supprimer definitivement internet explorer et l'afficher dans la console
/*pour cela jutilise shift()*/
console.log(webBrowsers.shift())
//QUESTION : supprimer definitivement edge et le consoler
/*pour cela jutilise pop()*/
console.log(webBrowsers.pop())
//Question : a partir du tableau restant ne conserver que firefox et Chrome sans modifier le tableau obtenu apres les differentes suppressions et afficher ces deux tableaux dans la console
/*donc il me faut un nouveau tableau*/
console.log(webBrowsers.slice(1, 3))
console.log(webBrowsers)

/*TOUT JUSTE !!!*/


/***********MANIPULER ----- COPIE ---- FUSION ...... **********/

//lA METHODE REVERSE() inverse l'ordre des elements du tableau

let numbers7 = [101, 0, 25, 9, 51]

numbers.reverse()

console.log(numbers7) // Display [51, 9, 25, 0, 101 ] 

//La methode push() permet d'inserer plusieurs elements a la fin du tableau. Elle renvoie la nouvelle taille de celui ci 

let colors = ['bleu'] 
console.log(colors.push('blanc', 'Rouge')) // Display 3 it's the new array length (2 added)
console.log(colors) // Display colors array with the 2 added values ['bleu' 'blanc' 'Rouge']

//La methode unshift() ressemble a push sauf que les elements sont rajoutes au debut du tableau. Elle renvoie la nouvelle taille de celui ci 
/*On reprend le meme tableau colors*/
console.log(colors.unshift('Rose')) // Display 4 because there is the new array length 
console.log(colors) // Display ['Rose' 'bleu' 'blanc' 'Rouge'] 


//La methode splice() ajouter modifier ou supprimer des elements du tableau // pas facile celui la 
//Cette methode peut prendre jusqua 3 parametres: 
//Premier parametre: index a partir du quel il faut commencer a modifier le tableau, si negatif cest a partir de la fin du tableau 
//Deuxieme parametre: nombre d'elements a remplacer //Si le deuxieme parametre est absent la suppression ira du premier parametre jusqua la fin du tableau si celui ci vaut 0 aucun element ne sera supprime on pourra ajouter un element sans en supprimer
//Troisieme parametre:  indique les elements a ajouter dans le tableau a partir de l'index indique en premier parametre// Si ce parametre est absent alors splice( )supprimera les elements cibles par les deux premiers parametres  

let animaux = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display ['Chien']
// Because the deletion starts at index 2 and concerns only 1 item.
console.log(animaux.splice(2, 1))

// Display ['Lion', 'Chat', Cheval', 'Tigre', 'Ours']
// Without 'Chien' which has been deleted
console.log(animaux)

// Display ['Tigre', 'Ours']
// Because the deletion starts at index 3 of the modified array and concerns 2 items.
console.log(animaux.splice(3, 2, 'Abeille', 'Aigle', 'Lynx'))

// Display ['Lion', 'Chat', Cheval', 'Abeille', 'Aigle', 'Lynx']
// Without 'Tigre' and 'Ours' which has been deleted and replaced by 'Abeille', 'Aigle' and 'Lynx'.
console.log(animaux)

// Display ['Abeille', 'Aigle']
// Because the deletion starts at the third element from the end (-3) and concerns 2 elements.
console.log(animaux.splice(-3, 2, 'Faucon'))

// Display ['Lion', 'Chat', Cheval', 'Faucon', 'Lynx']
console.log(animaux)

// Display ['Chat', Cheval', 'Faucon', 'Lynx']
// Because the deletion goes from index 1 to the end because no end value has been passed as a parameter.
console.log(animaux.splice(1))

// Display ['Lion']
console.log(animaux)

// Display []
// Empty array because there is no deletion (the second parameter is 0)
console.log(animaux.splice(0, 0, 'Requin'))

// Display ['Requin', 'Lion']
console.log(animaux)

//La methode concat() va concatener les tableaux, va les fusionner en un nouveau tableau pas de modification des tableaux mais en cree un nouveau elle prend en parametre le ou les tableaux a concatener au tableau On peut aussi concatener les valeurs directement 
let animals0 = ['Chat', 'Lynx']
let otherAnimals = ['Lion', 'Tigre']
let otherAnimals2 = ['Requin', 'Aigle']

let allAnimals = animals0.concat(otherAnimals, otherAnimals2) //il faut creer une variable pour recevoir la concatenation 

// Display : ['Chat', 'Lynx', 'Lion', 'Tigre', 'Requin', 'Aigle']
// Concatenation of animals, otherAnimals and otherAnimals2
console.log(allAnimals)

// Concat values
let otherAnimals3 = otherAnimals.concat('Chien', 'Ours')

// Display : ['Lion', 'Tigre', 'Chien', 'Ours']
// Concatenation of otherAnimals and 'Chien', 'Ours'
console.log(otherAnimals3)

// Creation of a multi-dimensional array by concatenation
let allAnimals2 = [].concat(
  [animals0],
  [otherAnimals],
  [otherAnimals2]
)

// Display : [['Chat', 'Lynx'], ['Lion', 'Tigre'], ['Requin', 'Aigle']]
console.log(allAnimals2)

//La methode join() Cree une chaine de caracteres en concatenant tous les elements d'un tableau Par defaut le separateur est la virgule mais on peut le modifier en le passant en parametre

let animaux1 = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display : Lion,Chat,Chien,Cheval,Tigre,Ours
console.log(animaux1.join())

// Display : Lion / Chat / Chien / Cheval / Tigre / Ours
console.log(animaux1.join(' / '))


//La methode flat() Cree un nouveau tableau contenant tous les elements du tableau et des tableaux situes dans celui ci // Accepte un parametre facultatif qui permet de specifier la profondeur de tableaux  imbriques a aplatir (1 par defaut)
let animals = [
    'Zèbre',
    ['Lion', 'Tigre'],
    'Vache',
    ['Chat', 'Chien'],
    'Aigle'
  ]
  
  let animalsFlat = animals.flat()
  
  // Display : ['Zèbre', 'Lion', 'Tigre', 'Vache', 'Chat', 'Chien', 'Aigle']
  console.log(animalsFlat)
  
  let animals2 = [
    'Chat',
    [
      'Lynx',
      ['Aigle', 'Faucon'],
      ['Ours', 'Zèbre']
    ],
    'Chien',
    [
      ['Lion', 'Tigre']
    ],
    'Cheval'
  ]
  
  let animals2Flat1 = animals2.flat()
  
  // Display : 
  // As the default depth is 1, only the arrays at the first depth level have been flattened.
  /*
  [
    'Chat',
    'Lynx',
    ['Aigle', 'Faucon'],
    ['Ours', 'Zèbre'],
    'Chien',
    ['Lion','Tigre'],
    'Cheval'
  ]
  */
  console.log(animals2Flat1)
  
  let animals2Flat2 = animals2.flat(2)
  
  // Display : ['Chat', 'Lynx', 'Aigle', 'Faucon', 'Ours', 'Zèbre', 'Chien', 'Lion', 'Tigre', 'Cheval']
  // As the defined depth is 2, all arrays have been flattened.
  console.log(animals2Flat2)


  /**************APPLIQUER LA NOTION*******************/
let webBrowser = ['Internet Explorer', 'Edge']
//QUESTION: ajouter Opera et Safari au debut du tableau en affichant la nouvelle taille du tableau dans la console
console.log(webBrowser.unshift('Opera', 'Safari'))
//QUESTION : ajouter l'element Vivaldi a la fin du tableau en affichant la nouvelle taille  du tableau 
console.log(webBrowser.push('Vivaldi'))
console.log(webBrowser)
//QUESTION: remplacer safari IE et edge par firefox et chrome affichant les elements supprimes et le tableau modifie
console.log(webBrowser.splice(1,3,'Firefox', 'Chrome'))
console.log(webBrowser)
















