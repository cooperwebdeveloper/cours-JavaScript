//À partir de la fonction suivante, qui retourne le jour de la semaine, écrivez une fonction JavaScript qui testera la fonction ci-dessous en vous inspirant du pattern AAA:

const getDayOfDate = (day, month, year) => {
	const d = new Date(year, month, day);
	switch (d.getDay()) {
		case 0:
		return 'Dimanche'
		case 1:
		return 'Lundi'
		case 2:
		return 'Mardi'
		case 3:
		return 'Mercredi'
		case 4:
		return 'Jeudi'
		case 5:
		return 'Vendredi'
		case 6:
		return 'Samedi'
	}
}


// Pour réaliser les tests unitaires, on utilisera :

// Arrange : donnée de la date du 15 mai 2020 (la date devra être fournie en 3 Number)

// Act : comparaison avec le résultat attendu

// Assert : validation avec un boolean en retour

// La fonction de test devra être réalisée dans le même fichier, sous la fonction existante. Vous devrez importer le code JS dans une page HTML pour pouvoir le lancer.

const test = () => {
    if (getDayOfDate(15, 5, 2020) === 'Vendredi') { //on sait que cette date correspond a un vendredi 
    return true;
    } else {
    return false;
    }
    }
    console.log(test());
   