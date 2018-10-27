// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    }, {
        code: "LA",
        nom: "Lannister"
    }, {
        code: "BA",
        nom: "Baratheon"
    }, {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return [
                "Eddard",
                "Catelyn",
                "Robb",
                "Sansa",
                "Arya",
                "Jon Snow"
            ];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}

// Creer un choix dans la liste deroulante
function creerEltOption(texte, valeur) {
    var element = document.createElement("option");
    element.textContent = texte;
    element.value = valeur;
    return element;
}

// Creer un element de liste a puce
function creerEltLi(texte) {
    var element = document.createElement("li");
    element.textContent = texte;
    return element;
}

// On declare la liste deroulante de choix
var maisonElts = document.querySelector("select");

// Place chaque element du tableau 'maisons' (composés d'un value et d'un nom)
// dans la liste deroulante de choix (<select>)
maisons.forEach(function(house) {
    maisonElts.appendChild(creerEltOption(house.nom, house.code));
});

// Ajoute un gestionnaire d'evenement de type 'change' (chaque fois que le choix change)
// sur la liste deroulante.
maisonElts.addEventListener("change", function(event) {
    // event.target.value = 'code' de la maison 'ciblée' par le changement
    // Si on choisit la maison Stark, le event.target.value === ST
    // et ainsi getPersonnages(ST) --> renvoie "Eddard", "Catelyn" etc..
    var persos = getPersonnages(event.target.value);
    var persosElt = document.getElementById("persos");
    // Vide la ligne a chaque changement :
    persosElt.innerHTML = "";
    // Passe en revue la liste des personnages correspondant a la maison ciblée (via le value de chaque maison)
    persos.forEach(function(perso) {
        // Met chacun de ces personnages dans 'li' dans le 'ul'
        persosElt.appendChild(creerEltLi(perso));
    });
});
