// Acceder a un noeud voulu de la page en les parcourant à l'aide de childNodes
// et son indice montre vite ses limites (changements dans la page html, difficile a lire etc)
// On va donc utiliser d'autres techniques...

// Accés selon la balise : getElementsByTagName() :

var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

// Le 'Elts' dans la variable n'est pas anodin
// On fait ça pour dire que la variable contient des elements du DOM
// Pour une variable contenant 1 seul element du DOM on met 'Elt' au singulier.

// Accés selon la class : getElementsByClassName() :

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Accés selon l'Id : getElementsById() :

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles")); // Attention pas de 's' a element

// Accés selon un selecteur css (querySelectorAll() et querySelector()) :

// Pour eviter de faire :
// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

// Tous les paragraphes :
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu" :
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe" :
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe querySelector() sans le 'All'
console.log(document.querySelector("p"));

// Obtenir des infos :

// Propriete innerHTML. Le contenu HTML de l'élément identifié par "contenu" :
console.log(document.getElementById("contenu").innerHTML);
// Propriete textContent. Le contenu textuel de l'élément identifié par "contenu" :
console.log(document.getElementById("contenu").textContent);

// Les attributs :

// getAttribute(). L'attribut href du premier lien. Renvoie le contenu de href :
console.log(document.querySelector("a").getAttribute("href"));

//Certains attributs comme href, id ou value sont directs accessibles en propriete :
console.log(document.querySelector("ul").id); // ou .href ou .value etc..

// On peut verifier la presence d'un attribut sur un element avec la methode hasAttribute() :
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Pour recup la liste des classes d'un element du DOM : propriete classList (s'utilise comme un array) :
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"
// Penser a classList.add

// Verifier la presence d'une classe dans un element du DOM avec la methode contains de classList :
if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}
