// L'exercice en POO :

/* var Personnage = {
    init: function(nom) {
        this.nom = nom;
    },

    decrire: function() {
        var description = this.nom;
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.init("Athos");
var perso2 = Object.create(Personnage);
perso2.init("Porthos");
var perso3 = Object.create(Personnage);
perso3.init("Aramis");

var mousquetaires = [];
mousquetaires.push(perso1);
mousquetaires.push(perso2);
mousquetaires.push(perso3);

console.log("Voici les 3 mousquetaires :");

mousquetaires.forEach(function(nom) {
    console.log(nom.decrire());
});

var perso4 = Object.create(Personnage);
perso4.init("D'artagnan");

mousquetaires.push(perso4);

console.log("Et maintenant ils sont 4 :")

mousquetaires.forEach(function(nom) {
    console.log(nom.decrire());
}); */

// Sans POO, plus simplement :

var mousquetaires = ["athos", "aramis", "porthos"];

console.log("Voici les 3 mousquetaires :");
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}
console.log("Et maintenant ils sont 4 :");
mousquetaires.push("d'artagnan");
mousquetaires.forEach(function(noms) {
    console.log(noms);
});
