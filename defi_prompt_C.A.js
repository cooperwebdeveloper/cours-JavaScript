//on stocke les prix
let priceApple = 0.32;
let pricePear = 0.44;
// on stocke les quantités
var soldApple = prompt("pommes vendues:");
var soldPear = prompt("Poires vendues:");
//recettes pour chaque fruit
let appleTurnover = parseFloat(priceApple) * parseFloat(soldApple);  //parseFloat est inutile ici
let pearTurnover = pricePear * soldPear;
// Chiffre d'Affaires total
let totalTurnover = appleTurnover + pearTurnover;
//on cree l'alerte qui affichera les informations à l'utilisateur
alert("vous avez gagné " + appleTurnover + " euros en pommes");
alert("vous avez gagné " + pearTurnover + " euros en poires");
alert("votre C.A total est de: " + totalTurnover + "euros.")

//petit plus, un recap en console

console.log("total C.A pommes: " + appleTurnover);
console.log("total C.A poires: " + pearTurnover);
console.log("C.A du jour: " + Math.round(totalTurnover *100)/100 + " €"); // je ne sais pas pourquoi on disait de faire comme ca
console.log(priceApple);
