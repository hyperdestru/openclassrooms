// Les boucles :

// while :

console.log("Debut du programme");
var x = 1;
while (x <= 5) { // Si la condition liée au 'while' est TRUE alors les instructions du bloc sont effectuées.
    console.log(x);
    x += 1;
}
console.log("Fin du programme.");

/******************************************************************************/

// for :

var compteur; // Par convention la variable compteur d'une boucle 'for' est appelée "i"
for (compteur = 0; compteur <= 5; compteur++) { // for (initialisation; condition; etape)
    console.log(compteur);
}

// On peut aussi declarer la variable 'i' dés l'initialisation du 'for'.
// --> for(var i = 1 etc..)
// Si nombre de tours connus a l'avance : plutot 'for'
// Si nombre de tours imprevisible : plutot 'while'
