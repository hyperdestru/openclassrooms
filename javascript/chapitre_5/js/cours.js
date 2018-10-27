// Les fonctions :

function direBonjour() { // Declaration de la fonction. Ici pas de parametre.
    console.log("Bonjour !"); // Corps de la fonction
}

direBonjour(); // Appel de la fonction. Ici affichera 'Bonjour !' dans la console.

/******************************************************************************/

function direBonjour() {
    return "Bonjour !"; // Même chose avec 'return'.
}

var resultat = direBonjour(); // Ici stockage du retour de la fonction dans une variable.
console.log(resultat); // Affichera 'Bonjour !' dans la console.

// L'exécution de l'instruction 'return' renvoie immédiatement vers le programme appelant.
// Il ne faut jamais ajouter d'instructions après un return dans une fonction :
// elles ne seraient jamais exécutées.

/******************************************************************************/

// Même chose plus simple :

function direBonjour() {
    return "Bonjour !";
}
console.log(direBonjour()); // Ici pas de stockage prealable dans une variable.

/******************************************************************************/

//Variables locales :

function direBonjour() {
    var message = "Bonjour !"; // Declaration de la variable locale. Utilisable que dans la fonction. Si on appel la variable message en dehors de la fonction = 'undefined'.
    return message;
}
console.log(direBonjour());

/******************************************************************************/

// Generalisation :

function maFonction(parametre1, parametre2) {
    // Instructions pouvant utiliser parametre1, parametre2.
}
// Appel de la fonction maFonction
// parametre1 reçoit la valeur de argument1, parametre2 la valeur de argument2.

maFonction(argument1, argument2);
