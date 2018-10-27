function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var p = prompt("Quel est ton prenom ?");
var n = prompt("Quel est ton nom ?");

console.log(direBonjour(p, n)); // Appel de la fonction et son affichage (cf. 'return message' dans direBonjour)
// Attention parametre !== arguments ! D'où la necessité de les appelés dans l'ordre !
