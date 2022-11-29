// utiliser la console dans le code js : taper console dans le code puis ajouter un point afin d'appeler la methode desiree 
/** La methode info()
 * affiche un message dans la console le message est affiche sans mise en forme particuliere
 * 
 */
 const val = 4
 const min = 8
 const infoMessage = 'Début de la fonction'
 
 console.info('GO !')
 console.info({val, min, infoMessage}) // GO! {val: 4, min: 8, infomessage: "Debut de la fonction"}

 //La methode log() affiche un message dans la console c'est une des methodes qui sera la plus utile pour afficher les valeurs de nos variables lors des phases de developpement ou de debogage 

 // La methode error() affiche une erreur dans la console Elle aide a trouver l'origine de l'erreur en indiquant la trace d'appel (STACK TRACE )c a d le chemin parcouru depuis le debut du programme pour arriver jusqu'a l'erreur a chaque etape le fichier et la ligne concernes 
 //console.error () prend en parametre un message  ou une liste d'objets a afficher 
 console.error('Une erreur est survenue') 

 //La methode warn() affiche un message d'avertissement jaune , prend en parametre un message a afficher
 console.info('Message INFO')

 console.warn('Message WARN')
 
 console.error('Message ERREUR')
 
 console.log('Message LOG')

//La methode assert() affiche un message d'erreur donne dans la console uniquement si la condition definie est fausse 
//Le premier parametre est la condition a verifier 
//Le second parametre est une liste d'objets js a afficher 
const age = 16
const majority = 18
const assertReason = 'La valeur âge doit être supérieure à la valeur de la majorité'

console.assert(age > majority, {age, majority, assertReason}) //le message s'affiche si age > majority est faux

// Dans l'exemple ci-dessus, on souhaite vérifier que age est bien supérieur à majority et si ce n'est pas le cas on souhaite afficher un message d'erreur dans la console.

// Comme ce n'est pas le cas, la console va afficher : Assertion failed: Object { âge: 16, majority: 18, assertReason: 'La valeur âge doit être supérieure à la valeur de la majorité' }

//La methode clear() vide la console 
const age1 = 16
const majority = 18
const assertReason = 'La valeur âge doit être supérieure à la valeur de la majorité'

console.assert(age > majority, {age, majority, assertReason})

console.clear()

// Dans l'exemple ci-dessus, le message de la méthode assert() ne sera pas affiché, car la méthode clear() est déclenchée juste après et va donc vider la console, qui affichera uniquement : La console a été effacée.

//La methode count() affiche dans la console le nbr de fois ou elle a ete appelee
//elle accepte eventuellement un label qui permet de savoir combien de fois count() a ete appelee avec ce label 
console.count()
for(let i=0; i<4;i++) {
console.count('Dans la boucle');
}
console.count()
// affiche :
// default: 1 
// Dans la boucle: 1
// Dans la boucle: 2
// Dans la boucle: 3
// Dans la boucle: 4
// default: 2

/*il y a bien 4 count effectues dans la boucle et deux count effectues en dehors de celle ci*/

/*la methode countReset() va simplement remettre le compteur vu precedement a zero 
Elle peut prendre en parametre un label pour pouvoir remettre a zero un compteur specifique declare avec un label*/
console.countReset()
console.countReset('supérieur')


/*La methode dir() affiche la liste des proprietes de l'objet passe en parametre. Des fleches permettent de deplier les informations */
console.countReset()
console.countReset('supérieur')

/*complement ++++ */
/* La methode dirxml() affiche un arbre des elements enfants de l'element XML specifie, mais il est egalement possible de specifier un element HTML*/
// <!DOCTYPE html>
// <html lang="fr">
  // exemple avec ce document html:
// <head>
//   <meta charset="UTF-8">
//   <title>Entrées, sorties</title>

//   <script src="main.js"></script>
// </head>

// <body>
// </body>

// </html>

console.dirxml(document.head)
/* le resultat dans la console sera tout ce que contient la balise head*/


/* Les methodes group() groupCollapsed() et groupEnd()
group() groupe plusieurs messages de la console dans un element retractable pour ameliorer la lisibilite
groupCollapsed() fait la meme chose que group() mais le groupe est retracte par defaut  l'utilisateur devra cliquer sur le bouton pour voir le contenu
groupEnd() ferme le groupe en cours tous les messages de console affiches apres cette ligne ne seront pas affiches dans l'element retractable */

//La methode table() Affiche les donnees des tableaux js (Array()) ou des objets sous forme d'un tableau dans la console 
//Le premier parametre est obligatoire ce doit etre un objet ou un tableau 
//Le deuxieme parametre est facultatif le tableau contient les noms des colonnes a afficher dans la sortie
const numbers = [4, 8, 14, 2]

console.table(numbers)

const persons = [
  {
    firstName: 'Julien',
    userName: 'JC',
  },
  {
    firstName: 'Lara',
    userName: 'LM',
  },
]

console.table(persons)

console.table(persons, ['userName']) //syntaxe pour afficher un tableau avec les valeurs des parametres userName

//Les methodes time() timeLog() et timeEnd() 
/*
La methode time() demarre un chronometre  il peut etre utile pour mesurer le temps que prend une operation 
La methode timeEnd() arrete ce meme chronometre la console affiche alors le temps en millisecondes 
La methode timeLog() affiche la valeur actuelle du chronometre 

Il est possible de passer un parametre label a ces trois fonctions afin de demarrer afficher et arreter un chronometre precis, on peut ainsi lancer plusieurs chronometres simultanement les afficher et les arreter via leur labels*/

// La methode trace() affiche la trace d'appel (stack trace), sert pour le debogage 
first()

function first() {
  second()
}

function second() {
  third()
}

function third() {
  console.trace()
}


// La console nous donne bien le détail du chemin parcouru :

// console.trace

// third @ main.js:12

// second @ main.js:8

// first @ main.js:4

// (anonymous) @ main.js:1

/*À retenir
La méthode log() est une des fonctionnalités qui vous sera le plus utile pour afficher les valeurs de vos variables lors des phases de développement ou de débogage.

assert() : affiche un message d'erreur donné dans la console, uniquement si la condition définie est fausse.

table() : affiche les données des tableaux JavaScript (Array()) ou des objets sous forme d'un tableau dans la console.

trace() : affiche la trace d'appel (stack trace) dans la console, c'est-à-dire le chemin parcouru pour atteindre l'emplacement du code où vous avez appelé cette méthode.*/

Attention
L'objet console est très utile durant le développement pour vous permettre de déboguer rapidement ou de visualiser le comportement de votre application. Cependant, quand votre application est prête pour fonctionner en production, il convient de supprimer toutes les lignes console de votre code. En effet, elles constituent une perte – certes, minime – de performance, mais c'est également autant de pistes que vous laissez à un potentiel attaquant pour comprendre comment votre code fonctionne.


/************MISE EN APPLICATION ************/

//check if user age has reached majority 
let age = 28 
console.groupCollapsed('droit de vote') //a l'interieur de ce groupe collapse il va y avoir tous les console.log() qu'il y a dedans 

console.log(age)

const hasReachedMajority = age => {     // creation d'une constante qui recoit une fonction qui retourne age qd il est sup a 18 
    return age > 18 
}

const canVote = hasReachedMajority(age) //la constante canVote recoit ce qui sort de hasReachedMajority c a d les + de 18 ans

//creation d'une condition 

if (canVote) { // si + de 18 ans 
    console.info('Cette personne peut voter')
} else { // tous ceux que la fonction hasReachedMajority a rejete
    console.warn('Cette personne ne peut pas voter') // s'affiche en jaune 
}

console.groupEnd() //pas de parametre quand on ferme 

// Display name age and line of work 

let nameOf = 'Jeremy' 
let lineOfWork = 'Developpeur js'

console.log(`${nameOf}, ${age} ans, ${lineOfWork}`) // ceci n'apparaitra pas dans le groupe collapse

/**les tableaux dans la console */

let dogs = [
    {
        name: 'Fluffy',
        breed: 'Corgi',
        age: 3
    },
    {
        name: 'Mano',
        breed: 'Beauceron',
        age: 2
    },
    {
        name: 'Charlie',
        breed: 'Bichon',
        age: 6
    },
    {
        name: 'Luna',
        breed: 'Bichon',
        age: 10
    },
    {
        name: 'Juno',
        breed: 'Beauceron',
        age: 2
    },
]

console.log(dogs) // affiche des accolades avec des pointilles en mode collapse
console.table(dogs) // affiche un beau tableau style avec les chiens 
dogs.forEach(dog => { //pour chaque element de dogs appliquer cette fonction
    console.count() //on peut mettre un label '' mais c pas obligatoire // Va compter le nbre delements du tableau en faisant des boucles
})

console.assert(dogs.length < 10, 'Pas assez de chiens!' ) //si la longueur de dogs est inferieure a 10 le message s'affiche


/*utilisation du chronometre*/

let number = 0

// juste avant la boucle on lance notre compteur
console.time('chronometre de la boucle')

// creation d'une boucle 
for (let i = 0; i<1e6; i++){ //on fait boucler 1 million de fois (1e6 = 1 puissance 6)
    number ++;
}
//juste apres la fin de la boucle on arrete le chronometre
console.log('chronometre de la boucle') // on met le meme label qu'au depart

console.log(number);
//mon pc : 1.4 ms

 


