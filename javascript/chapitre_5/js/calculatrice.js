function calculer(nb1, operation, nb2) {
    switch (operation) { // les changements sont fonction de l'operation effectuée (signe)
        case "+":
            var resultat = nb1 + nb2;
            break;
        case "-":
            var resultat = nb1 - nb2;
            break;
        case "*": // au cas où 'operation' = '*' (signe multiplier)
            var resultat = nb1 * nb2;
            break;
        case "/":
            var resultat = nb1 / nb2;
            break;
        default:
            console.log("Invalid parameter.");
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
