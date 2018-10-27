// La gestion des formulaires :

// On accede a la valeur d'une zone de texte avec la propriete value :
var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

// Lorsque une zone de texte devient cible de saisie, un evenement de type focus
// apparait. Si la cible de saisie change, une evenement de type blur apparait :

// Affiche d'un message contextuel pour la saisie du pseudo :
pseudoElt.addEventListener("focus", function() {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

// Suppression du message contextuel pour la saisie du pseudo :
pseudoElt.addEventListener("blur", function(event) {
    document.getElementById("aidePseudo").textContent = "";
});

// Directement depuis le code javascript on peut modifier la cible de saisie,
// en appelant les methodes focus() pour donner le focus et blur() pour l'enlever :
// Focus sur la zone de saisie du pseudo :
pseudoElt.focus();

// Les elements d'option :

// Cases cocher (<input type="checkbox">) : quand une case change de valeur
// l'objet Event associé a l'evenement dispose d'une propriete booleene 'checked'
// Par exemple pour un evenement 'change' :
// Affichage de la demande de confirmation d'inscription :
document.getElementById("confirmation").addEventListener("change", function(event) {
    console.log("Demande de confirmation : " + event.target.checked);
});

// Boutons radio (<input type="radio">) :

// Affichage du type d'abonnement choisi :
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function(event) {
        console.log("Formule d'abonnement choisie : " + event.target.value);
    });
}

// Lors d'un changement de valeur, la propriete event.target.value de l'evenement 'change'
// contient la valeur de l'attribut 'value' de la balise <input> selectionnée !

// Idem pour liste deroulante (<select>, <option>).

// Le formulaire comme element du DOM :

// <form> == element du DOM. Et cet element possede une propriete 'elements'
// qui rassemble l'ensemble des champs du formulaire.
// On peut utiliser 'elements' pour acceder a un champ a partir de son nom (attribut 'name').
// ou a partir de son indice :

var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"

// La soumission du formulaire :

// Avant la soumission du formulaire via l'attribut 'action', un evenement de type
// 'submit' est declenché. On accede aux données du formulaire avant leurs envois
// en ajoutant un gestionaire a ce type d'evenement.
// On peut même annuler l'envoi des données avec la methode preventDefault().

// Affiche de toutes les données saisies ou choisies :
form.addEventListener("submit", function(e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
        case "abonewspromo":
            console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
            break;
        case "abonews":
            console.log("Vous êtes abonné(e) à la newsletter");
            break;
        case "aborien":
            console.log("Vous n'êtes abonné(e) à rien");
            break;
        default:
            console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
        case "FR":
            console.log("Vous êtes français(e)");
            break;
        case "BE":
            console.log("Vous êtes belge");
            break;
        case "SUI":
            console.log("Vous êtes suisse");
            break;
        default:
            console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

// Validation au moment de la soumission du formulaire = ajout gestionaire pour l'evenement de type submit et y faire des verifications.

// Validation pendant la saisie = repose sur l'exploitation des evenements 'input'
// ceux ci se declenchent sur une zone de saisie chaque fois que la valeur de celle ci est modifiée.
// Donc il faut ajouter un gestionaire pour les evenements de type 'input'.

// Vérification de la longueur du mot de passe saisi :
document.getElementById("mdp").addEventListener("input", function(e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

// Verification aprés la saisie = repose sur l'exploitation d'un evenement 'blur'
// car ce type d'evenement se declenche lors de la perte de 'focus' d'un champ.

// On peut utiliser la methode indexOf() qui permet de verifier la presence d'un caractere
// si indexOf() ne trouve pas il renvoie la valeur -1, et 0 si il trouve.
// Contrôle du courriel en fin de saisie :
document.getElementById("courriel").addEventListener("blur", function(e) {
    var validiteCourriel = "";
    if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisi ne contient pas le caractère @
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

// Les expressions regulieres (regex) :

var regex = /@/; // La chaîne doit contenir le caractère @ --> 'regex' est un objet
console.log(regex.test("")); // Affiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sophie&mail.fr")); // Affiche false
console.log(regex.test("sophie@mail.fr")); // Affiche true

// Motif regex :
// [] -−> deigne une intervalle ex : [a-z] ou [0-9]
// \d --> recherche un chiffre
// . --> remplacer n'importe quel caractere
// \ --> indique que le caractere qui suit doit etre rechercher tel quel
// + --> permet de rechercher une ou plusieurs occurence du caractere qui le precede
// * -−> permet de rechercher zero ou plusieurs occurence du caractere qui le precede
// Go to regex101.com for more...
// Exemple : var regex = /.+@.+\..+/ --−> modele d'email (____@____.___)

// Contrôle du courriel en fin de saisie :
document.getElementById("courriel").addEventListener("blur", function(e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});
