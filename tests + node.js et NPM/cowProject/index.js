// importation de cowsay
const cowsay = require ('cowsay')
// creation d'une variable message et appel de la fonction say de notre module:
const message = cowsay.say({text: "Hello tout le monde", r: true,})
console.log(message)