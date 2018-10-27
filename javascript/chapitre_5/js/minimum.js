function min(x, y) { // x et y sont des parametres
    if (x > y) { // on compare ces 2 parametres
        return y; // on retourne le plus petit
    } else {
        return x; // Dans tous les cas on retourne x : si x < y et si x === y !
    }
}

console.log(min(25, 5)); // Doit afficher 5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
