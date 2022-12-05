// Marion souhaite fêter son anniversaire dans une salle des fêtes pouvant contenir 50 personnes.

// Vous allez devoir, à partir du code source ci-après :

// 1. Vérifiez que le nombre d’invités n’excède pas 50 personnes

// 2. Dans le cas où le nombre de personnes invitées dépasse la capacité de la salle, affichez “Le nombre d’invités est trop important”

// 3. Affichez le nombre d’invités dans la console

// Supprimez les lignes "// Write your code here instead of this comment" et écrivez votre code à la place.


		// 1) Créez une variable pour le nombre max de personnes pouvant être contenues dans la salle ainsi que le nombre d’invités.
		const maxPeople = 50
		let invites = 49
		console.log(invites)

		if (invites <= maxPeople) {
			console.log(`vous avez ${invites} invites c'est OK!`)
			
		  
	} else {
			console.warn(`vous avez ${invites} invites c'est beaucoup trop pour la salle!`)
			 
		}

		// correction
		
				// 1) Créez une variable pour le nombre max de personnes pouvant être contenues dans la salle ainsi que le nombre d’invités.
				const peakNumber = 50;
				let guestsNumber = 51;
				if (guestsNumber <= peakNumber ) {
				  console.log(true);
			} else {
				  console.log(false);
				}
				
				//2)
			const message = 'Le nombre d’invités est trop important';
			console.assert(guestsNumber <= peakNumber , {guestsNumber , peakNumber , message});
				
				// 3)
				console.log(guestsNumber);
				
		