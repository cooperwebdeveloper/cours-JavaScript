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
const notes  = [30, 20, 15, 17, 8, 5, 12, 4];



function higher(tableau, max){ 
  if (tableau.length > 0){ //fin de la boucle qd tableau a 0 cases
    const valeur = tableau.pop(); // a chaque recursivite il prend le dernier element                                         du tableau
    const maxi = max > valeur ? max : valeur; 
    return higher(tableau, maxi) 
  } else { 
    return (max) } 
} 
//maximum = higher(notes, 0); // ca y etait mais je vois pas a quoi ca sert
console.log(higher(notes, 0))