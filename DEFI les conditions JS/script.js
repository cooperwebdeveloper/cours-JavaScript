const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let username = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire
});

//"Bonjour [civilité de l'utilisateur] [nom de l'utilisateur]. ["Inscrivez-vous vite à notre newsletter" / "Merci de vous être abonné à notre newsletter"], elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, [catégorie culinaire préférée de l'utilisateur]!"

// let message1 = '';
// let message2 = '';
// let message3 = '';
// //code pour premier message
// civility == female ? message1 = `Bonjour Mme ${name}` : message1 = `Bonjour Mr ${name}`;

// //code pour deuxieme partie du message 
// if (newsletter == true){
//    message2 = "Merci de vous etre abonne a la newsletter, elle permettra de vous envoyer des delicieuses recettes de votre categorie preferee,"
// } else {
//     message2 = "Inscrivez vous vite a notre newsletter!  elle permettra de vous envoyer des delicieuses recettes de votre categorie preferee,"
// }
// //code pour troisieme partie du message

// switch(categorie){
//     case 'soupe':
//         message3 = "soupes!"
//         break;
//     case 'plat':
//         message3 = "plat!"
//         break;
//     case 'Dessert (fruits)':
//         message3 = "desserts fruits!"
//         break;
//     case 'Dessert (chocolat)':
//         message3 = "dessert chocolat!"
//         break;
//     default :
//         message3 = "Entrée froide"
//         break;
// }

// alert(message2);


//**********CORRECTION*************/
// Les variables déclarées ci-dessus contiennent les données du formulaire

let displayedCivility = civility === 'female' ? 'Mme.' : 'M.';
let newsletterMessage;

if (newsletter) {
  newsletterMessage = 'Merci de vous être abonné à notre newsletter';
} else {
  newsletterMessage = 'Inscrivez-vous vite à notre newsletter';
}

let displayedCategory;

switch (category){
  case 'cold-starter':
    displayedCategory = 'Entrée froide';
    break;
  case 'soup':
    displayedCategory = 'Soupe';
    break;
  case 'main-course':
    displayedCategory = 'Plat';
    break;
  case 'fruit-dessert':
    displayedCategory = 'Dessert (fruits)';
    break;
  case 'chocolate-dessert':
    displayedCategory = 'Dessert (Chocolat)';
    break;
  default:
    displayedCategory = 'Entrée froide'
}

alert(`Bonjour ${displayedCivility} ${username}. ${newsletterMessage}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${displayedCategory}!`);
