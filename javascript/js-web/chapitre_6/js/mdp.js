var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var msg = "Mot de passe OK";
    // Il faut imbriquer les conditions pour couvrir tous les scenarios possible :
    // Si les mdp sont identiques alors on verifie la longueur de l'original...
    if (mdp1 === mdp2) {
        //... si il est assez long alors on verifie qu'il y ai un chiffre
        if (mdp1.length >= 6) {
            var regexMdp = /\d/;
            //... et si il n'y a pas de chiffre alors le msg changera
            if (!regexMdp.test(mdp1)) {
                msg = "Le mot de passe doit contenir au moins 1 chiffre";
            }
            // et on remonte la chaine des conditions... avec leurs else
        } else {
            msg = "Le mot de passe doit contenir 6 caracteres ou plus";
        }
    } else {
        msg = "Les mots de passe ne sont pas identiques";
    }
    document.getElementById("infoMdp").textContent = msg;
    // Il faut annuler l'envoi du formulaire avec preventDefault() sinon le form se reset
    // et on ne peux pas lire la phrase d'info !
    event.preventDefault();
});
