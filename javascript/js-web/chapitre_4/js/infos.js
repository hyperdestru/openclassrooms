// Cree un paragraphe dans le id 'infos'
var pElt = document.createElement("p");
pElt.textContent = "Informations sur l'element :";
document.getElementById("infos").appendChild(pElt);

// Cree une liste a puce dans le di 'infos'
var ulElt = document.createElement("ul");
document.getElementById("infos").appendChild(ulElt);

// Cree la premiere puce de la liste et la met dans le ul
var liElt = document.createElement("li");
var st = getComputedStyle(document.getElementById("contenu"));
liElt.textContent = "Hauteur : " + st.height; // Affiche l'info de hauteur de l'ement id "contenu"
ulElt.appendChild(liElt);

// idem avec une deuxieme puce
var liElt2 = document.createElement("li");
liElt2.textContent = "Largeur :" + st.width;
ulElt.appendChild(liElt2);
