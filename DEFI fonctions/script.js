let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55

const prices = [120.50,1200.99,420.01,12585.55]


 // fonction qui calcule le prix - pourcentage de promo
function outLet (price, percent){
   return price - (price * percent / 100)
}

// ma reponse : console.log(Math.ceil(outLet(chaise, 25))) //Arrondit toujours au superieur comme demande par le client
// fonction qui est sensee arrondir au decimal superieur 
function roundDecimal(number){
    const tmp = Math.pow(10, 2) // 10 puissance 2 = 100 
    return Math.round(number*tmp)/tmp
}
 //formater le point en virgule 
function formatPrice(price){
    return price.toString().replace("." , ",") + " €"
}




let outLetPrice = outLet(chaise, 25)
let roundedPrice = roundDecimal(outLetPrice)

let finalPrice = formatPrice(roundedPrice)


console.log(roundDecimal(outLet(chaise, 25)))
console.log(outLet(chaise, 25)) // pour verifier l'arrondi
console.log(finalPrice);

//Afficher les prix apres promo formates grace a l'array des prix .
for (let i = 0; i < prices.length; i++) {
			  	  
    let newPromoPrice = outLet(prices[i], 25)
    let roundedPrice = roundDecimal(newPromoPrice)
 let finalPrice = formatPrice(roundedPrice)
    console.log(finalPrice)
        
      }

      //ou

      prices.forEach(function(price) 
{ 
       let newPromoPrice = outLet(price, 25)
		  let roundedPrice = roundDecimal(newPromoPrice)
       let finalPrice = formatPrice(roundedPrice)
		  console.log(finalPrice)
}
);

//*********************************************************

//ne fonctionne pas et je ne sais pas encore pourquoi 
let noteList = [12, 10, 18, 11, 14, 5, 10]
function average(noteList){
    let moyenne
    let temp


for (i = 0; i < noteList.length; i++){
temp += noteList[i]
}
moyenne = temp / noteList.length
console.log(moyenne);
}

average()

//************************************************** */

//Les fonctions recursives = une fonction qui s'appelle elle-meme

//trier un tableau pour ramener la note la plus haute:
const notes2  = [30, 20, 15, 17, 8, 5, 12, 4];



function higher(tableau, max){ 
  if (tableau.length > 0){ //fin de la boucle qd tableau a 0 cases
    const valeur = tableau.pop(); // a chaque recursivite il prend le dernier element                                         du tableau
    const maxi = max > valeur ? max : valeur; 
    return higher(tableau, maxi) 
  } else { 
    return (max) } 
} 
//maximum = higher(notes, 0); // ca y etait mais je vois pas a quoi ca sert
console.log(higher(notes2, 0))

//***********Les fonctions anonymes et recursives, ES5/ES6 arrow functions*****************/



console.log('********************************************')
//     fonctions anonymes 
// appliquer la notion : ecrire un f°anonyme qui change les lettres d'un mot en majuscules :

//on met la f° anonyme dans une variable pr pouvoir l'appeller
const upper = function (word){
  //instructions
  return word.toUpperCase()
}
//on n'appelle pas la f° car anonyme mais on appelle la const comme si c'etait une f°
console.log(upper('Hello'))

console.log('**********************')
//       Appliquer la notion: Arrows functions

// code ES5:
function sum(num1, num2){
  return num1 + num2
}
console.log(sum(40,2))
//code ES6:
const summ = (num1, num2) => num1 + num2;
console.log(summ(6,6))
console.log('*******************')
 // code ES5:
function stringLength (str){
  let length = str.length
  console.log(`The length of "${str}" is : `, length)
  return str.length
}
stringLength("WillyNilly")
//code ES6:

const stringLength2 = (str) => {
  length = str.length
  return console.log(`The length of "${str}" is : `, length)
}

stringLength2('batuoifhjwofhdafgsaedtfgad')
console.log('**********************')

//ES5:
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

console.log('********************')
 //ES6:

const array2 = ['d', 'e', 'f']
array2.forEach(element => console.log(element))
