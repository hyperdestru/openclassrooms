console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1;

// Commenter/Decommenter ligne suivante pour voir la solution :
//console.log("(La solution est " + solution + ")");

var nombreUser = Number(prompt("Saisi un nombre entre 1 et 100 !"));
var essai = 1; // Pour pouvoir compter les essais et les affichés quand on gagne.

for (var i = 1; i <= 5; i++) {
    if (nombreUser > solution) {
        console.log(nombreUser + " est trop grand.");
        essai++; // On incremente le nombre d'essais
        nombreUser = Number(prompt("Ressayes !"));
    } else if (nombreUser < solution) {
        console.log(nombreUser + " est trop petit.");
        essai++; // On incremente le nombre d'essais
        nombreUser = Number(prompt("Ressayes !"));
    } else if (nombreUser === solution) {
        i = 5;
        // Si on gagne on met le compteur 'i' au max (la partie s'arette).
        console.log(nombreUser + " est bien la solution !");
        console.log("Bravo ! Tu as trouvé en " + essai + " essai(s) !");
    }
}
// Scenario au dela des 6 essais (utile pour afficher l'essai perdant) :
if (nombreUser > solution) {
    console.log(nombreUser + " est trop grand.");
    console.log("Tu n'as plus d'essai ! C'est perdu.");
} else if (nombreUser < solution) {
    console.log(nombreUser + " est trop petit.");
    console.log("Tu n'as plus d'essai ! C'est perdu.");
}
