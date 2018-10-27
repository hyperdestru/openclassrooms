// Activité 3 - Gestionnaire de liens

var listeLiens = [];

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

//***********Recupere les liens dernierement ajoutés sur le serveur :
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function(reponse) {
  // On converti les données JSON en tableau javascript
  var liensSrv = JSON.parse(reponse);
  liensSrv.forEach(function(lienSrv) {
    // On met tout dans le tableau de liens javascript d'où tout decoule
    listeLiens.push(lienSrv);
  });
  displayAll();
});

// Apparition/disparition des champs et du bouton d'ajout lors du clic :
var form = document.getElementById("formAjoutLien");
form.style.display = "none";

document.getElementById("ajoutLien").addEventListener("click", function(event) {
  document.getElementById("formAjoutLien").style.display = "block";
  event.target.style.display = "none";
});

document.getElementById("submitLien").style.marginTop = "10px";

// Gestion du nouveau lien au moment de la soumission du formulaire :
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

  //***********Envoi et ajout du nouveau lien + MàJ de la liste :
  ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", objNouveauLien, function(reponse) {
    listeLiens.unshift(objNouveauLien);
    displayAll();
  }, true);

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

  // Vidage de la liste
  document.getElementById("contenu").innerHTML = "";
});
