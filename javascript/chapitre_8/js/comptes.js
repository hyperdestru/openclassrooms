// TODO : ajoutez ici la définition des objets nécessaires :

// Defnition de l'objet 'Comptes' qui deviendra prototype de tous les comptes :
var Comptes = {
    // Initialisation des comptes :
    initComptes: function(nom, solde) {
        this.nom = nom;
        this.solde = solde;
    },
    debiter: function(montant) {
        this.solde -= montant;
    },
    crediter: function(montant) {
        this.solde += montant;
    },
    // Description des comptes :
    decrire: function() {
        var description = "Titulaire : " + this.nom + "." + " Solde : " + this.solde + ".";
        return description;
    }
};

// Definition de l'objet 'CompteBancaire' qui prend 'Comptes' comme prototype :
var CompteBancaire = Object.create(Comptes);

// Initialisation de  l'objet 'CompteBancaire' (même initialisation que 'Comptes') :
CompteBancaire.initCB = function(nom, solde) {
    this.initComptes(nom, solde);
};

// Definition de l'objet 'CompteEpargne' qui prend aussi 'Comptes' comme prototype :
var CompteEpargne = Object.create(Comptes);

// Initialisation de 'CompteEpargne' (même initialisation que 'Comptes' + le taux) :
CompteEpargne.initCE = function(nom, solde, taux) {
    this.initComptes(nom, solde);
    this.taux = taux;
};

// Description particuliere du compte epargne (on y rajoute l'info sur le taux) :
CompteEpargne.decrireAvecTaux = function() {
    var description = this.decrire() + " Taux : " + this.taux * 100 + "%.";
    return description;
};

// Ajout des interets au solde du compte epargne :
CompteEpargne.ajouterInterets = function() {
    this.solde = this.solde * (1 + this.taux);
};

// On associe l'objet 'compte1' au prototype CompteBancaire :
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);

// On associe compte2 au prototype CompteEpargne :
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrireAvecTaux());

// Scenario de credit/debit des comptes : 
var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte :
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
