// Doit afficher le nombre total de liens dans la page web
// Ainsi que le 1er lien et le dernier

function infosLiens() {
    var item = document.querySelectorAll("a");
    console.log(item.length);
    console.log(document.querySelector("a").href); // Renvoie le 'href' du 1er 'a'
    console.log(item[item.length - 1].href); // Renvoie le href du dernier 'a' !
}

function possede(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe)); // Renvoie tout seul false ou true selon le cas
    } else {
        console.log("Il n'existe pas d'identifiant sous le nom : " + id);
    }
}

infosLiens(); // On pourrait ecrire une fonction 'infos' tout seul plus generique qui prendrai un parametre

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
