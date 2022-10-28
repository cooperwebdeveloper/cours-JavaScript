// IF... IF...ELSE.... ELSE IF.... ELSE  //

let printEdition = true;  //abonne edition papier
let digitalEdition = true; //abonne edition digitale
let isVIP = true; // client VIP


if (printEdition) {  //si la condition est true 
  if (isVIP) {
    //envoi du courrier postal VIP
  } else{
    //envoi du courrier postal classique
  }
  //envoi du courrier postal
} else if (printEdition && digitalEdition){
  //envoi du courrier postal et envoi de x email
} else if (digitalEdition){
  //envoi de l'email
} else {  //client avec aucun abonnement
  //envoi du courrier avec nos offres
}

//*************************************************

//appliquer la notion

let age = 8;

//ecrire un code qui permet d'afficher un message si user >= 18ans
if (age >= 18) {
console.log('vous etes majeur')
} else {
  console.log('vous etes mineur')
}

//**********************************************************
//  les expressions ternaires

let isVIPS = true;
let message = '';

isVIPS ? message ='Merci de faire partie des clients VIP' : 'Abonnez vous pour devenir client VIP';

alert(message);

//*******************************************************

let lastname = 'Brassens';
let genre = 'homme';

// (genre == 'homme') ? console.log('Mr ' + lastname) : console.log('Mme ' + lastname);

//correction:
console.log((genre == 'femme' ? 'Mme ' : 'Mr ') + lastname);

//*****************************************************

//   La condition switch 

let fruit = "kiwi";

switch (fruit) {
	case "banane":
		console.log("Vous avez choisi une banane.");
		break;
	case "pomme":
		console.log("Vous avez choisi une pomme.");
		break;
	case "kiwi":
		console.log("Vous avez choisi un kiwi.");
		break;
	case "clémentine":
		console.log("Vous avez choisi une clémentine.");
		break;
	default:
		console.log("Vous n'avez pas choisi un fruit de la liste.");
		break;
}

// Affichera "Vous avez choisi un kiwi."

//**************************
// Appliquer la notion

let channel = 4;

switch (channel){
  case 1:
    console.log('TF1');
    break;
  case 2:
    console.log('France 2');
    break;
  case 3:
    console.log('France 3');
    break;
  case 4:
    console.log('Canal +');
    break;
  case 5:
    console.log('France 5');
    break;
  case 6:
    console.log('M6');
    break;
  default :
    console.log('chaine non trouvee');
    break;
}


//**********************************************************************

