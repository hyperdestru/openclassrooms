// Activité 2 - Gestionnaire de liens
// Attention a Microsoft Edge et IE qui aiment bien bloquer des scripts js par defaut

var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    }, {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    }, {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

function styling(element) {
    element.style.color = "#428bca";
    element.style.fontSize = "1.3em";
    element.style.textDecoration = "none";
    element.style.fontWeight = "bold";
}

// Affiche les liens (generique) :
function displayAll() {
    for (i = 0; i < listeLiens.length; i++) {
        // Crée les blocs lien contenant les 3 infos :
        var lienDivElt = document.createElement("div");
        lienDivElt.setAttribute("class", "lien");
        document.getElementById("contenu").appendChild(lienDivElt);

        // Crée les liens (en bleu) :
        var lienElt = document.createElement("a");
        lienElt.href = listeLiens[i].url;
        lienElt.textContent = listeLiens[i].titre
        lienDivElt.appendChild(lienElt);

        // Crée les url en noir :
        var urlElt = document.createElement("span");
        urlElt.textContent = " " + listeLiens[i].url;
        lienDivElt.appendChild(urlElt);

        // Crée l'info auteur :
        var auteurElt = document.createElement("div");
        auteurElt.textContent = "Ajouté par " + listeLiens[i].auteur;
        lienDivElt.appendChild(auteurElt);

        // Stylise le tout :
        styling(lienElt);
    }
}

displayAll();

// Apparition/disparition des champs et du bouton d'ajout lors du clic :
var form = document.getElementById("formAjoutLien");
form.style.display = "none";

document.getElementById("ajoutLien").addEventListener("click", function(event) {
    document.getElementById("formAjoutLien").style.display = "block";
    event.target.style.display = "none";
});

// Ajoute et affiche le nouveau lien au moment de la soumission du formulaire :
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Chaque nouveau lien est un objet avec le tableau listeLiens comme proto
    var objNouveauLien = Object.create(listeLiens);
    objNouveauLien.titre = form.elements.titre.value;
    objNouveauLien.url = form.elements.url.value;
    objNouveauLien.auteur = form.elements.auteur.value;

    // Controle http:// et https://
    var regexUrl = /https?:\/\/.+/;
    if (!regexUrl.test(form.elements.url.value)) {
        objNouveauLien.url = "http://" + form.elements.url.value;
    }

    // Ajout du nouveau lien en premier dans le tableau listeLiens
    listeLiens.unshift(objNouveauLien);

    // Disparition du formulaire et ré-apparition du bouton
    form.style.display = "none";
    document.getElementById("ajoutLien").style.display = "block";

    // Crée et affiche le message de succés
    var msg = document.createElement("p");
    msg.textContent = "Votre lien " + objNouveauLien.titre + " a bien été ajouté !";
    document.getElementById("message").appendChild(msg);

    // Fait disparaitre le message au bout de 2 secondes
    setTimeout(function() {
        document.getElementById("message").removeChild(msg);
    }, 2000);

    // Vidage de la liste et mise a jour
    document.getElementById("contenu").innerHTML = "";
    displayAll();
});
