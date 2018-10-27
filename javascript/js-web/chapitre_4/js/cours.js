// Modifier le style avec la propriete 'style':

var pElt = document.querySelector("p");
pElt.style.color = "red"; // Mise de la premiere phrase en rouge
pElt.style.margin = "50px"; // Avec une marge de 50 pixels
// (la phrase en vert est mise en vert dans .html AVEC L'ATTRIBUT 'style'
// et la phrase en bleu dans le .css)

// La propriete style fonctionne si l'element du DOM n'est pas stylisé dans un .css
// Donc ceci n'affichera rien dans la console :
var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[2].style.color);
// Car le style de ce dernier <p> est geré dans css.

// DONC pour palier a cette limite html/css on utilise getComputedStyle () :

var stylePara = getComputedStyle(document.getElementById("para")); // Prend en parametre un noeud cible du DOM
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB

// Les propriete s'ecrivant avec un tiret en css doivent s'ecrire en camelCase :
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";
