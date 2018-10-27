// TODO : écrire la fonction compterElements

function compterElements(selector) {
    var research = document.querySelectorAll(selector).length;
    return research;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2
