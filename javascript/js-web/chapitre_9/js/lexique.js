// Cree l'alphabet sous forme d'array a partir d'un string
var a = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var alphabet = a.split(" ");

// Cree et affiche les differents blocs de contenu
var contenu = document.getElementById("contenu");
var liensLettres = document.createElement("p");
contenu.appendChild(liensLettres);
var contenuDico = document.createElement("dl");
contenu.appendChild(contenuDico);

// Passe en rev chaque lettre de l'array cree
alphabet.forEach(function(lettre) {
    // Ajout/affichage des lettres sous forme de lien
    var lien = document.createElement("a");
    lien.textContent = lettre;
    // Chaque lettre-lien de renvoie vers rien en particulier (cf. preventDefault)
    lien.href = "";
    liensLettres.appendChild(lien);
    // Ajout du separateur aprés chaque lettre
    var sep = document.createTextNode(" | ");
    liensLettres.appendChild(sep);

    lien.addEventListener("click", function(event) {
        event.preventDefault();
        // Pour chaque lettre cliquée va chercher le contenu de l'API correspondante
        ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre, function(reponse) {
            var mots = JSON.parse(reponse);
            mots.forEach(function(mot) {
                var titre = document.createElement("dt");
                titre.textContent = mot.term;
                titre.style.fontWeight = "bold";
                titre.style.fontSize = "1.2em";
                titre.style.marginTop = "10px";
                contenuDico.appendChild(titre);
                var definition = document.createElement("dd");
                definition.textContent = mot.definition;
                contenuDico.appendChild(definition);
            });
        });
        // Vidage de la liste
        contenuDico.innerHTML = "";
    });
});
