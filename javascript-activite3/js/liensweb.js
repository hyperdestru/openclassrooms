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

for (i = 0; i < listeLiens.length; i++) {
    // Crée les blocs lien contenant les 3 infos :
    var lienDivElt = document.createElement("div");
    lienDivElt.setAttribute("class", "lien"); // Attribut la classe 'lien' (cf .css)
    document.getElementById("contenu").appendChild(lienDivElt); // Chaque bloc se place dans le div 'contenu'

    // Crée les liens (en bleus) :
    var lienElt = document.createElement("a");
    lienElt.href = listeLiens[i].url;
    lienElt.textContent = listeLiens[i].titre
    lienDivElt.appendChild(lienElt); // Place le lien dans le bloc lien lienDivElt

    var urlElt = document.createElement("span");
    urlElt.textContent = " " + listeLiens[i].url;
    lienDivElt.appendChild(urlElt);

    //Pour l'url en noir methode sans utiliser le span :
    //lienElt.insertAdjacentHTML("afterend", " " + listeLiens[i].url); // Methode avec insert..

    var auteurElt = document.createElement("div");
    auteurElt.textContent = "Ajouté par " + listeLiens[i].auteur;
    lienDivElt.appendChild(auteurElt);

    styling(lienElt);
}
