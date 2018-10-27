var tour = Number(prompt("Combien tu veux faire de tours de manege wesh ?"));

for (var i = 1; i <= tour; i++) {
    console.log("Tour numero " + i + ".");
}

/* Ou avec while : */

var tour = Number(prompt("Combien tu veux faire de tours de manege wesh ?"));
var x = 1;

while (x <= tour) { /* De x jusqu'a tour */
    console.log("Tour numero " + x + ".");
    x += 1; /* On modifie la variable de comparaison pour eviter une boucle infinie et que ça aille vers 'tour' */
}
