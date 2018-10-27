var boutonClic = document.getElementById("clic");
var compteurClics = document.getElementById("compteurClics");
var boutonDesactive = document.getElementById("desactiver");
var x = 0; // Pour le compteur de clics

// On veut cliquer sur les 2 boutons :
boutonClic.addEventListener("click", clic);
boutonDesactive.addEventListener("click", desactive);

function clic() {
    x++; // On augmente le compteur de 1 a chaque fois qu'on fait appel a la fonction = chaque fois qu'on clique (cf ligne 7)
    compteurClics.textContent = x;
}

function desactive() {
    boutonClic.removeEventListener("click", clic); // Supprime l'evenement de clic du premier bouton
}
