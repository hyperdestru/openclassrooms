// Rajout/modif de desserts dans la liste :

// Vise le bouton de l'html :
var bouton = document.getElementsByTagName("button")[0];

// La fonction ClicBouton contient une fonction anonyme qui gere un evenement de clic sur un element de la liste :

function ClicBouton() {
    var dessertChoix = prompt("Entrez le nom du nouveau dessert :");
    var liElt = document.createElement("li");
    liElt.textContent = dessertChoix;
    liElt.id = dessertChoix;
    document.getElementById("desserts").appendChild(liElt);

    // re-target les elements de la liste autrement qu'avec 'liElt' car ce dernier correspondant a un createElement :
    var dessert = document.getElementById(dessertChoix);

    // Fonction anonyme qui gere la modif d'un element de la liste
    dessert.addEventListener("click", function(event) {
        dessertChoix = prompt("Modifier le dessert :");
        dessert.textContent = dessertChoix;
        dessert.id = dessertChoix;
    });
}

// Ajoute un evenement a ce bouton : 'si on clique dessus...'
// Alors il fera appel a la fonction ClicBouton..
bouton.addEventListener("click", ClicBouton);
