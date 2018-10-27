function max(tab) {
    var m = tab[0]; // On initialise le maximum du tableau, le premier element (peut importe la valeur).
    for (var i = 1; i < tab.length; i++) { // Passage en revue de chaque element du tableau, et comparaison avec le 'm' (max) à l'instant t.
        if (tab[i] > m) {
            m = tab[i];
        }
    }
    return m;
}

var valeurs = [1, 2, 0, 1222, 1222235, 11, 45, 0.89];
console.log("Le maximum est : " + max(valeurs)); // Nom du tableau mis en argument de la fonction 'max'
