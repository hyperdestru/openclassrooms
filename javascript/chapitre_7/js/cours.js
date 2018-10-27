// Programmation orienté objet avec javascript :

// La POO modifie la manière dont un programme est écrit et organisé.
// Jusqu'ici, vous avez appris à créer des programmes plutôt basés sur des fonctions :
// c'est ce que l'on appelle la programmation procédurale.
// Vous allez découvrir comment les écrire en utilisant des objets.

/******************************************************************************/

// Creation d'un objet (syntaxe litterale) :

// Chaque ligne du corps de l'objet prend une ',' sauf la derniere !

var stylo = {
    type: "bille", // propriété 'type'
    couleur: "bleu", // proprieté 'couleur'
    marque: "Bic" // propriete 'marque'
};

/******************************************************************************/

// Creation d'un objet grâce a un constructeur (instanciation) :

function MonObjet() {
    // Initialisation de l'objet
}

// Et instanciation à partir du constructeur :

var monObj = new MonObjet(); // Mot clé 'new'

/******************************************************************************/

// Pour utiliser l'objet avec la notation pointée nomObjet.nomPropriete :

console.log(stylo.type); // affiche 'bille' !
console.log(stylo.couleur); // affiche 'bleu'

// Pour utiliser l'objet avec la notation des [] (moins utilisée) :

console.log(stylo['type']); // Affiche "bille"

/******************************************************************************/

// Accés a une propriete d'un objet = 'expression' qui produit une valeur :

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);
// Affiche : Mon stylo a 'bille' 'Bic' écrit en 'bleu'

/******************************************************************************/

// Modifier un objet :

monObjet.maPropriete = nouvelleValeur

// On peut même rajouter de maniere dynamique (hors du constructeur ou de la syntaxe litterale) une nouvelle proprieté :

monObjet.nouvellePropriete = valeur

// Exemple de rajouts dynamiques avec un objet vide a la base :

var perso = {}; // Objet vide
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;

// Rajout dynamique d'une methode qui renverra la description du personnage :
perso.decrire = function() {
    var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force";
    return description;
};

// Interessant : un objet peut tout a fait avoir comme propriete un autre objet

/******************************************************************************/

// Les methodes :

// Une methode est une propriété d'un objet, dont la valeur est une fonction.
// En somme c'est une fonction interne à l'objet.
// On peut donc y faire appel comme n'importe quel autre propriété de l'objet.

// Exemple :

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    decrire: function() { // Methode 'decrire'. Renvoie la description du personnage
        var description = this.nom + " a " + this.sante + " points de vie et " + // 'this' représente l'objet sur lequel la méthode a été appelée.
        this.force + " en force";
        return description;
    }
};

// Appel de la methode. Soit : nomObjet.nomMethode(). Differe de nomFonction(parametre) = fonction externe (programmation procédurale).
console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

/******************************************************************************/

// Quelques objets predefinis dans javascript :
// L'objet 'console' avec comme methode console.log()
// L'objet 'Math' avec comme methode Math.random()
// And many more...

/******************************************************************************/

// Generalisation :

var monObjet = {
    propriete1: valeur1,
    propriete2: valeur2,

    methode1: function( //...) {
    //...
},
methode2: function( //...) {
//...
},
// ...
};

console.log(monObjet.propriete1); // Affiche la propriété propriete1 de monObjet

console.log(monObjet.methode1(...)); // Affiche le résultat de l'appel de la méthode methode1 de monObjet
