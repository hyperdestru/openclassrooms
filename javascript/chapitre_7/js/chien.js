var chien = {
    nom: "Parkson",
    race: "Bouvier Bernois",
    taille: "120",

    aboyer: function() {
        var aboiement = "Grrrr wouaf wouaaaf !";
        return aboiement;
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
