var Personnage = { // prototype 'Personnage' : le plus haut, TOUS les persos auront au moins ces proprietes en commun !
    initPerso: function(nom, sante, force) { //init pour pouvoir initialiser nos personnages en 1 seule ligne !
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.inventaire = {
            gold: 10,
            key: 1
        };
    },

    attaquer: function(cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts.");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie.");
            } else {
                cible.sante = 0;
                this.inventaire.gold += cible.inventaire.gold;
                this.inventaire.key += cible.inventaire.key;
                console.log(this.nom + " a tué " + cible.nom + ". " + this.nom +
                    " a maintenant " + this.inventaire.gold + " pieces d'or !" + " Et " + this.inventaire.key + " clé(s) !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage); // Creation de l'objet 'Joueur' avec Personnage comme prototype (penser a la majuscule au debut)
Joueur.initJoueur = function(nom, sante, force) { // affectation dynamique de la methode initJoueur à l'objet Joueur. Initialisation de 'Joueur' legerement differente de Personnage(xp en plus)
    this.initPerso(nom, sante, force); // initialisation de Joueur (this) qui est un 'Personnage' et qui partage donc les propriete de 'Personnage' au même titre que les Adversaire plus tard.
    this.xp = 0; // Mais en plus, 'Joueur' possede une proprieté 'xp', seulement propre au 'Joueur' et non aux 'Adversaire'
}; // Ne pas oublier le ';'

Joueur.decrire = function() {
    var description = this.nom + " : " + this.sante + " de santé. " + this.force +
        " de force. " + this.xp + " d'experience." + " Or : " + this.inventaire.gold + "." +
        " Clé(s) : " + this.inventaire.key + ".";
    return description;
};

Joueur.combattre = function(adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        this.inventaire.gold += adversaire.inventaire.gold;
        this.inventaire.key += adversaire.inventaire.key;
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'experience. Ainsi que : " +
            this.inventaire.gold + " pieces d'or et " + this.inventaire.key + " clé(s) !");
        this.xp += adversaire.valeur;
    }
};

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

Adversaire.decrire = function() {
    var description = this.nom + ", un " + this.race + " de " + this.valeur +
        " points de valeur. Autres : " + this.sante + " de santé. " + this.force +
        " de force." + " Or : " + this.inventaire.gold + "." + " Clé(s) : " + this.inventaire.key + ".";
    return description;
}

// Declaration/initialisation de tout le monde :

var player1 = Object.create(Joueur);
player1.initJoueur("Xael", 150, 45);

var player2 = Object.create(Joueur);
player2.initJoueur("Hyperdestru", 170, 30);

var badguy1 = Object.create(Adversaire);
badguy1.initAdversaire("DrGraDouble", 150, 35, "Afrikaan", 20);

// Presentation de tout le monde :

console.log("Bienvenue a toi ! Je te présente nos 2 heros : ");
console.log(player1.decrire());
console.log(player2.decrire());
console.log("Leur ennemi juré est : ");
console.log(badguy1.decrire());

// Scenario d'attaque en fonction de dice :

var dice = Number(prompt("Choisi un nombre entre 1 et 2 : "));

if (dice === 1) {
    badguy1.attaquer(player1);
    badguy1.attaquer(player2);
    player1.combattre(badguy1);
    player2.combattre(badguy1);
    badguy1.attaquer(player2);
    badguy1.attaquer(player2);
    badguy1.attaquer(player2);
    badguy1.attaquer(player2);

} else {
    player1.combattre(badguy1);
    player2.combattre(badguy1);
    badguy1.attaquer(player1);
    player2.combattre(badguy1);
    player1.force += 20;
    console.log(player1.nom + " trouve une bague de force ! Il a maintenant " +
        player1.force + " points de force !");
    player1.attaquer(badguy1);
}
