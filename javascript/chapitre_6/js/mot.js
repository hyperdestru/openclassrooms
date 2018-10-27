function comptageVoyelle(mot) {
    var voyelle = 0;
    for (var i = 0; i <= mot.length; i++) {
        var lettre = mot.toLowerCase()[i];
        if ((lettre === "a") || (lettre === "e") || (lettre === "i") ||
            (lettre === "o") || (lettre === "u") || (lettre === "y")) {
            voyelle++;
        }
    }
    return voyelle;
}

function inverser(mot) {
    var ligneInverse = "";
    for (i = (mot.length - 1); i >= 0; i--) { // on part de la fin du mot vers le debut jusqu'a l'indice zero.
        ligneInverse += mot[i]; // On incremente la 'ligne' d'1 caractere de 'mot' à chaque tour de i
        // --> Ou alors : ligneInverse = ligneInverse + mot[i];
    }
    return ligneInverse;
}

function conversionLeet(mot) {
    var ligneLeet = "";
    for (i = 0; i <= mot.length - 1; i++) { // Attention a bien viser le dernier caractere. Sinon boucle continue a +1 caractere et retourne undefined : A FAIRE LORSQUE var nomVariable = "" !
        ligneLeet += trouverLettreLeet(mot[i]); // On met en argument la lettre qui est passée en revue par la boucle a l'instant t.
    }
    return ligneLeet;
}

function trouverLettreLeet(lettre) {
    if (lettre.toLowerCase() === "a") { // si la lettre mise en minuscule est egale a 'a'. Alors elle sera egale a 4.
        lettre = "4";
    } else if (lettre.toLowerCase() === "b") { // Ou alors avec switch : switch (lettre.toLowerCase()) { case "b" : lettre = "3"; break;}
        lettre = "8";
    } else if (lettre.toLowerCase() === "e") {
        lettre = "3";
    } else if (lettre.toLowerCase() === "l") {
        lettre = "1";
    } else if (lettre.toLowerCase() === "o") {
        lettre = "0";
    } else if (lettre.toLowerCase() === "s") {
        lettre = "5";
    } else {
        lettre = lettre;
    }
    return lettre;
}

var motUser = prompt("Choisissez un mot, n'importe lequel :");

console.log("Le mot " + motUser + " contient " + motUser.length + " caracteres.");
console.log("Tout en minuscules il s'ecrit : " + motUser.toLowerCase() + ".");
console.log("Tout en majuscules il s'ecrit : " + motUser.toUpperCase() + ".");
console.log("Votre mot contient " + comptageVoyelle(motUser) + " voyelle(s) et " + (motUser.length - comptageVoyelle(motUser)) + " consonne(s).");
console.log("Votre mot écrit à l'envers devient : " + inverser(motUser) + ".");

if (inverser(motUser).toLowerCase() === motUser.toLowerCase()) {
    console.log("C'est donc un palindrome.");
} else {
    console.log("Ce n'est donc pas un palindrome.");
}

console.log("En leet speak ça donne : " + conversionLeet(motUser));
