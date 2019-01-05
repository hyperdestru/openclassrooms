console.log("Bienvenue dans le gestionnaire de contacts !");
// Tableau regroupant les options de l'utilisateur :
var options = ["******************************************",
    "1: Lister tous vos contacts",
    "2: Ajouter un nouveau contact",
    "0: Quitter",
    "******************************************"
];
// Affiche la liste des options :
options.forEach(function(option) {
    console.log(option);
});

// Declare l'objet (qui servira de prototype) 'Contact' avec ses 2 methodes :
var Contact = {
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function() {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

// Lien avec le proto, initialisation et push des 2 contacts existants :
var contact1 = Object.create(Contact);
var contact2 = Object.create(Contact);

contact1.init("Lévisse", "Carole");
contact2.init("Nelsonne", "Mélodie");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// Demande a l'user de choisir un nom et prenom pour le futur contact,
// Initialise ce nouveau contact comme objet avec Contact comme proto,
// Et push() dans le tableau 'contacts' + affiche une phrase de succés :
function ajouterContact() {
    var choixNom = prompt("Veuillez indiquer le nom de famille :");
    var choixPrenom = prompt("Veuillez indiquer le prénom :");
    var newContact = Object.create(Contact);
    newContact.init(choixNom, choixPrenom);
    contacts.push(newContact);
    console.log("Contact bien ajouté !");
}

// Bloc action de l'utilisateur :
var choix = Number(prompt("Veuillez choisir une option :"));
while (choix !== 0.1) {
    if (choix === 1) {
        console.log("Voici tous vos contacts :");
        contacts.forEach(function(contact) { // Boucle d'affichage du tableau 'contacts'
            console.log(contact.decrire());
        });
        // Affiche le tableau 'options' :
        options.forEach(function(option) {
            console.log(option);
        });
        choix = Number(prompt("Veuillez choisir une option :"));
    } else if (choix === 2) {
        ajouterContact();
        // Affiche le tableau 'options'
        options.forEach(function(option) {
            console.log(option);
        });
        choix = Number(prompt("Veuillez choisir une option :"));
    } else if (choix === 0) {
        console.log("A trés bientot !");
        choix = 0.1; // Ferme la boucle
    } else { // Gestion des erreurs si on tape autre chose que 1, 2 ou 0
        console.log("Oups, entrée invalide !");
        console.log("******************************************");
        choix = Number(prompt("Veuillez choisir une option :"));
    }
}

/* EXEMPLE EU A LA CORECTION :
var choix = 1;
console.log("Bienvenue dans le gestionnaire des contacts ! ");

// Affichage du menu
var menu = "1: Lister les contacts \n" +
    "2: Ajouter un contact \n" +
    "0: Quitter";

while (choix !== 0) {
    console.log(menu);

    choix = parseInt(prompt("Choisissez une option :"));
    if (choix == 1) {
        mesContacts();
    } else if (choix == 2) {
        ajoutContact();
    } else if (choix !== 0) {
        console.log("Tapez 1, 2 ou 0 pour quitter");
    }
} */
