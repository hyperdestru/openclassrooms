function carre(x) {
    var calcul = x * x;
    return calcul
}

for (var i = 0; i < 11; i++) {
    console.log("Le carre de " + i + " est : " + carre(i)); // Affiche tous les carrés de 0 a 10 (i²)
}

console.log("Et le carre de 24 : " + carre(24)); // Affiche le carre de 24
