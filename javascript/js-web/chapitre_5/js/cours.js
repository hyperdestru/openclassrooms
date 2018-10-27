// LES EVENEMENTS :

function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click :
// La methode addEventListener() prend en parametre 1 evenement (ici click) et une fonction :
boutonElt.addEventListener("click", clic);

// Même chose avec une fonction dite anonyme (apparement souvent utilisée en js) :

var boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", function() { // On place la fonction anonyme en parametre de la methode
    console.log("clic");
}); // parenthese et ; comme un forEach
// Une fonction anonyme n'est pas réutilisable ailleurs dans le code

// Supprimer un gestionnaire d'evenement : removeEventListener() :
// ...attention : il ne faut pas que la fonction qui gere l'evenement soit anonyme

boutonElt.removeEventListener("click", clic);

// Il y a de nombreux evenements que les elements du DOM peuvent declencher,
// Les principales sont :
// Les evenements clavier
// Les evenements souris
// Les evenements fenetre (scrolling, chargement...)
// Les evenements formulaire (focus, envoi...)

// Quel que soit le type d'evenement son declenchement s'accompagne de la créa
// d'un objet Event. Celui peut etre utilisé par la fonction qui gere l'evenement
// (anonyme ou non..).
// Les proprietes de Event dependent du type d'evenement.
// Mais dans tous les cas la propriete 'type' renvoie le type de l'evenement
// et la propriete 'target' renvoie la cible de l'evenement.
// L'objet Event est fourni à la fonction qui gere l'evenement sous la forme d'un parametre
// souvent nommé 'e', mais aussi event :

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function(event) {
    console.log("Evènement : " + event.type + ", texte de la cible : " + event.target.textContent);
});

// Gestion de l'appui sur une touche du clavier produisant un caractère (keypress) :

document.addEventListener("keypress", function(e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
    // L'information sur le caractere (valeur numerique --> unicode) pressé
    // est donnée par la propriete charCode de Event (e)
    // la methode String.fromCharCode() permet de traduire ce caract unicode en caractere normal
});

// Affiche des informations sur un événement clavier :
function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier :

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

// Gestion du clic de la souris :

// Renvoie le nom du bouton souris à partir de son code :
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
        case 0: // 0 est le code du bouton gauche
            bouton = "gauche";
            break;
        case 1: // 1 est le code du bouton du milieu
            bouton = "milieu";
            break;
        case 2: // 2 est le code du bouton droit
            bouton = "droit";
            break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris :
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris :
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// Evenement de chargement de la page :

// Gestion de la fin du chargement de la page web :
window.addEventListener("load", function() {
    console.log("Page entièrement chargée");
});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function(e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

// La propagation des evenements :

// Le DOM représente une page web sous la forme d'une hiérarchie de noeuds. Les événements déclenchés sur un noeud enfant vont se déclencher ensuite sur son noeud parent, puis sur le parent de celui-ci, et ce jusqu'à la racine du DOM (la variable document).
// C'est ce qu'on appelle la propagation des événements :

// Gestion du clic sur le document
document.addEventListener("click", function() {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function() {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function(e) {
    console.log("Gestionnaire bouton");
});

// Stopper la propagation d'un evenement :
// Gestion du clic sur le bouton :
document.getElementById("propa").addEventListener("click", function(e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});

// Modifier le comportement par defaut d'un evenement (deconseillé sans raison valable):
// Gestion du clic sur le lien interdit :
document.getElementById("interdit").addEventListener("click", function(e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});
