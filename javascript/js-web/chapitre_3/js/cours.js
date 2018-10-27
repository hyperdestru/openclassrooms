// Modification du contenu HTML de la liste : ajout d'un langage :
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste :
// document.getElementById("langages").innerHTML = "";

// Il vaut mieux que innerHTML soit utiliser pour de petites modif.

// Modification du contenu textuel du premier titre :
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre :
document.querySelector("h1").setAttribute("id", "titre");
// Ou equivalent (direct en propriete pour href, id, value..) :
document.querySelector("h1").id = "titre";

// Ajouter/suppr des classes avec classList et add/remove :
var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

// AJOUTER UN ELEMENT :

// Ajouter un new element se decompose en 3 opérations :
// 1-Créa du new element / 2-Definition des infos de cet element / 3-Insertion dans le DOM

// Exemple de rajout du language python dans la liste :

var pythonElt = document.createElement("li"); // Création d'un élément li - etape 1
pythonElt.id = "python"; // Définition de son identifiant - etape 2
pythonElt.textContent = "Python"; // Définition de son contenu textuel - etape 2 bis
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément - etape 3

// Creer un noeuf textuel : createTextNode()

// Inserer du contenu avant un noeud : insertBefore(element a ajouter, noeud en question)

// Inserer precisement du contenu : insertAdjacentHTML(position, chaîne HTML)
// .. position : "beforebegin", "afterbegin", "beforeend" ou "afterend"

// Remplacer un noeud existant : replaceChild(element a ajouter, element a remplacer)

// Supprimer un noeud : removeChild(element);

// Rajout d'un paragraphe + lien :
document.getElementById("langages").innerHTML += '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complete</p>';
document.getElementById("langages").insertAdjacentHTML("afterend", '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complete</p>');
