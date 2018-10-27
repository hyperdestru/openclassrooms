var rayonUser = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: rayonUser, // Propriete du rayon...

    perimetre: function() {
        var calculPerimetre = 2 * Math.PI * this.rayon; //...que l'on vise ici...
        return calculPerimetre;
    },

    aire: function() {
        var calculAire = Math.pow(this.rayon, 2) * Math.PI; //... et là.
        return calculAire;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
