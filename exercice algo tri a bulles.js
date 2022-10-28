//Trier les noms des personnes par ordre alphabetique

let persons = ['jules', 'laure', 'vincent', 'emma'];
let personsLength = persons.length;

for (let main = 0; main < personsLength - 1; main++) { //[main++] = [main = main + 1]
  for (let cell = 0; cell < personsLength - main - 1; cell++) { // - main -1 car on avance d'une case a chaque fois 
    if (persons[cell] > persons[cell + 1]) {                    // et donc on retire la posotion actuelle du nbre d'iterations a faire
      
      let temp;
      temp = persons[cell];
      persons[cell] = persons[cell + 1];
      persons[cell + 1] = temp;
    }
  }
}
console.log(persons);
