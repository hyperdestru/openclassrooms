// Création d'une requête HTTP :

/*var req = new XMLHttpRequest();
    // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
    req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
    // Envoi de la requête
    req.send(null);
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);

    // Même chose mais de façon asynchrone :

    /*var req = new XMLHttpRequest();
    req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
            console.log(req.responseText);
        } else {
            // Affichage des informations sur l'échec du traitement de la requête
            console.error(req.status + " " + req.statusText);
        }
    });
    req.addEventListener("error", function() {
        // La requête n'a pas réussi à atteindre le serveur
        console.error("Erreur réseau");
    });
    req.send(null);*/

// Même chose mais en creant une fonction ajax generique ===> cf ajax.js.
// Le code de lancement d'un appel ajax est ainsi simplifié
// Appel de la fonction contenue dans ajax.js :
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function(reponse) {
    console.log(reponse);
});

// Jusqu'ici on transmettait des données au travers d'un fichier texte (langages.txt)
// C'est trés limité, donc on emploie le format JSON.
// Fonction JSON.parse() --> transforme une chaine de caractere conforme au format JSON en un objet javascript
// Fonction JSON.stringtify() --> transforme un objet javascript en une chaine de caractere conforme au format JSON

var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));

// Ces fonctions permettent aussi de gérer les tableaux d'objets JSON

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    }, {
        marque: "Airbus",
        couleur: "A380"
    }
];

console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

// Recuperer des données JSON depuis un serveur :

// Même technique que pour le fichier txt donc notre fonction ajaxget est tjs utile :
ajaxGet("http://localhost/javascript-web-srv/data/films.json", function(reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function(film) {
        console.log(film.titre);
    })
});
