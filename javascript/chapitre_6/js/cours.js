// Les chaines de caracteres :

// La propriété 'length' :

console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18

// On peut stocker la valeur de cette proprieté dans une variable :

var mot = "kangouroo";
longueurDuMot = "kangouroo".length;
console.log(longueurDuMot); // affichera 9 (longueur de kangouroo)

/******************************************************************************/

// De min a maj avec les propriétés toLowerCase & toUpperCase (qui sont aussi des 'Methodes'):

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase(); // attention aux parentheses a la fin de la methode
console.log(motEnMinuscules); // Affiche "bora-bora"

var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"

/******************************************************************************/

//Comparaison de chaines (attention case sensitive) :

var chaine = "azerty";
console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false

/******************************************************************************/

// 1 chaine = ensemble de caracteres -−> chaque caractere est id par 1 numero ==> son indice.
// Le 1er caractere d'une chaine a pour indice : 0 !
// ==> Convention que l'on retrouve dans presque tous les languages
// 1er caractere = 0
// 2eme caractere = 1
// 3eme caractere = 2
// etc..
// Donc indice du dernier caractere d'une chaine = longueur de la chaine - 1

// Acceder a un caractere grace a son indice avec charAt(indice) ou les '[]' :

var sport = "Tennis-ballon"; // 13 caractères

console.log(sport.charAt(0)); // Affiche "T"

console.log(sport[0]); // Affiche "T"

console.log(sport.charAt(6)); // Affiche "-"

console.log(sport[6]); // Affiche "-"

// Acceder de suite au dernier caractere :

var longueurSport = sport.length; // On stocke la longueur de la chaine dans 1 variable
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !

/******************************************************************************/

// Parcourir une chaine caractere par caractere avec une boucle :

var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);
}

/******************************************************************************/

// Toutes les opérations applicables aux chaînes ne modifient JAMAIS la chaîne initiale
// mais renvoient de nouvelles chaînes.
// Une fois créée, une chaîne de caractères JavaScript ne peut plus être modifiée.
// On dit qu'elle est immuable (en anglais : immutable).
