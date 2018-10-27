// Cette représentation de la structure d'une page web offerte par un navigateur
// et exploitable via JavaScript est appelée DOM, pour Document Object Model.
// Le DOM définit la structure d'une page et le moyen d'interagir avec elle :
// il s'agit d'une interface de programmation, ou API (Application Programming Interface).

// Le W3C a standardisé les choses
// et la première version d'un DOM unifié a vu le jour en 1998.
// À l'heure actuelle, tous les navigateurs récents utilisent un DOM standard.

// La variable 'document' est un objet correspondant a la racine DOM,
// c'est a dire à la balise <html> :

var h = document.head; // On accede a la propriete 'head' de l'objet 'document'
console.log(h); // Affiche le noeud en question c'est a dire <head>

var b = document.body; // Idem avec propriete 'body'
console.log(b);

// Chaque objet du DOM a une propriete nodeType qui indique son type
// La valeur de cette propriete est ELEMENT.NODE pour un noeud element (html par ex)
// ...et document.TEXT_NODE pour un noeud textuel :

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Accès au premier et deuxieme enfant du noeud body :

console.log(document.body.childNodes[0]); // Renvoie un noeud textuel vide (espaces !)
console.log(document.body.childNodes[1]); // Renvoie bien <h1>

// Affiche les noeuds enfant du noeud body :

for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// Chaque objet du DOM possède une propriété 'parentNode'
// qui renvoie son nœud parent sous la forme d'un objet DOM :

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent
