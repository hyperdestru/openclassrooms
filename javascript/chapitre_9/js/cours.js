// Les tableaux (arrays) :

var films = ["Le loup de wall street", "The revenant", "Dans la foret"];
console.log(films); // Affiche array ["Le loup(...)"]
console.log(films.length); // Affiche 3
console.log(films[0]); // Affiche "Le loup de wall street"
//... même principe qu'avec les chaines. Premier element : indice 0
// Plus grand indice utilisable de l'array : taille de l'array - 1 (nomArray.length - 1)
// Si on vise un indice inexsitant cela renvoie 'undefined'
// Dans d'autres langages cela renverrait une erreur !

//******************************************************************************

// Parcourir un array avec une boucle for :

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}
// Affiche tous les elements de l'array ligne par ligne !

//******************************************************************************

// Parcourir un array avec une la methode forEach() (ne pas oublier le E majuscule) :

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.forEach(function(film) {
    console.log(film); // Ici on decide que film = element de films
}); // ne pas oublier de fermer la parenthese de la function et le ';' !

// Avec ForEach chaque element de l'array est passé en parametre à la fonction
// associée a la methode forEach()

//******************************************************************************

// Pour rajouter un element à l'array on utilise la methode push() :

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
films.push("Les Bronzés"); // push() prend en parametre l'element a inserer dans le tableau
console.log(films[3]); // Affichera "Les Bronzés"

// Un element de tableau peut etre une chaine, un booleen, un objet, un nombre ou même un autre tableau
// Ce qui peut compliquer les choses quand on veut les target avec les indices

//******************************************************************************

// Donc on considere les elements du tableau comme des objets :

var Film = {
    // Initialise le film
    init: function(titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function() {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film) {
    console.log(film.decrire()); // On affiche la description de chaque film
});
