// Objets et prototypes :

var unObjet = { // On creer un objet avec comme proprieté a = 2.
    a: 2
};

// Cration de unAutreObjet avec unObjet comme prototype :

var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

// Si le prototype d'un objet ne possède pas une propriété recherchée,
// alors c'est dans son propre prototype que la recherche continue,
// jusqu'à arriver à la fin de chaîne des prototypes.
// Si la propriété n'a été trouvée dans aucun objet,
// son accès renvoie la valeurundefined.

// En reprenant le code du debut :

// Creation de encoreUnObjet avec unAutreObjet comme prototype :

var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined

// Ce mode de relation entre les objets JavaScript est appelé délégation (ou héritage):
// un objet délègue une partie de son fonctionnement à son prototype.
