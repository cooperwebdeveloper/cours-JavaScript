// Ranger une liste de nombres par ordre croissant TRI A BULLES

let numbers = [3, 8, 5, 9, 1]
let numbersLenght = numbers.length //nombre de nombres pour determiner la position ou on se trouve
for (let main = 0; main < numbersLenght - 1; main++) { // Sert a declarer notre variable main qui part de zero a la taille du tableau moins 1 donc 4 pour premiere position (0) 
  for (let cell = 0; cell < numbersLenght - main - 1; cell++){
    if (numbers[cell] > numbers[cell + 1]) { //si la cellule de gauche est plus grande que la cellule de droite alors :
      numbers[cell] = numbers[cell] + numbers[cell + 1] //la cellule de gauche recoit sa valeur + la valeur de la cellule de droite
      numbers[cell + 1] = numbers[cell] - numbers[cell + 1] //et la cellule de droite recoit le resultat precedent moins sa propre valeur (rst=valeur de cell de gauche)
      numbers[cell] = numbers[cell] - numbers[cell + 1] // on retire la nouvelle valeur de la cellule de droite qui a changé au tour precedent
    }
  }
}
console.log(numbers)