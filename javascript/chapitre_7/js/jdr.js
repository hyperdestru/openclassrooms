var perso = {
    nom: nomUser,
    sante: 100,
    force: 100,
    xp: 0,

    decrire: function() {
        var description = "Sante : " + this.sante + "\nForce : " + this.force + "\nXP : " + this.xp;
        return description;
    }
};

var nomUser = prompt("Choisi un nom de personnage :");

console.log("Bonjour " + nomUser + ", voyons ce qu'il va t'arriver aujourd'hui...");
console.log("Tu commences avec ceci :");
console.log(perso.decrire());

var dice = Number(prompt("Ceci est l'equivalent d'un dé, choisi un chiffre entre 1 et 6 :"));

if (dice === 1) {
    perso.force = perso.force + 25;
    console.log("Tu as trouvé un bracelet de force au village, bravo, 25 pts en plus !");
    console.log(perso.decrire());
} else if (dice === 2) {
    perso.sante = perso.sante - 25;
    console.log("Embuscade ! Tu es blessé(e) à la jambe !");
    console.log(perso.decrire());
} else {
    perso.xp = perso.xp + 25;
    console.log("Eh bien il s'avere que ton entretien avec la garde du village a porté ses fruits, te voila embauché(e) !");
    console.log(perso.decrire());
}
