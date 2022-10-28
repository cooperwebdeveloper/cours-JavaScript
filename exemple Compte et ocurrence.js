
let word = "Charlitte"
let i = 0
let oc = 0

while (word[i]) { //Pour chaque lettre du mot contenu dans la variable word
    i = i + 1     //  la valeur de i s'accremente de 1 (pour chaque iteration)
}
console.log(i) // affiche la valeur de i soit le nombre de lettres que contient la variable word

for (let letter of word) { //On cree une nouvelle variable "letter" dans le for //pour chaque lettre de la variable word
    if (letter == "a") {   // on verifie si la lettre est un "a" si cest pas un "a" on ignore si cest un "a" on execute le code suivant{}
        oc = oc + 1        // la variable oc (ocurrence) s'accremente de la valeur 1
    }

}

console.log(oc) //On affiche la valeur de oc cad l'ocurrence de la lettre "a" dans le mot contenu dans la variable word