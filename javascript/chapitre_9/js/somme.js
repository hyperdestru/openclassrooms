function add(tab) {
    var z = 0;
    for (var i = 0; i < tab.length; i++) {
        z += tab[i];
    }
    return z;
}

var valeurs = [11, 3, 7, 2, 9, 10];
console.log("Le tout vaut " + add(valeurs) + ".");
