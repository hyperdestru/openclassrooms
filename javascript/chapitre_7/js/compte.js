var compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function(credit) {
        this.solde = this.solde + credit; // On creer un nouveau solde a partir du solde existant (this.solde) ! Et on retourne ce solde modifié.
        return this.solde;
    },

    debiter: function(debit) {
        this.solde = this.solde - debit;
        return this.solde;
    },

    decrire: function() {
        var description = "Titulaire : " + this.titulaire + "." + " Solde : " + this.solde + " euro(s)";
        return description;
    }
};

console.log(compte.decrire()); // On affiche l'etat du compte avant tout debit ou credit
var creditUser = Number(prompt("De combien voulez vous crediter ?"));
var debitUser = Number(prompt("De combien voulez vous debiter ?"));

compte.crediter(creditUser); // On passe l'entrée de l'utilisateur en parametre de la methode crediter
compte.debiter(debitUser);
console.log(compte.decrire()); // Nouvel etat du compte
