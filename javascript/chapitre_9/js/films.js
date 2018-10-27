var Movie = {
    init: function(name, year, dir) {
        this.name = name;
        this.year = year;
        this.dir = dir;
    },

    decrire: function() {
        var description = this.name + " (" + this.year + ", " + this.dir + ")";
        return description;
    }
};

var movie1 = Object.create(Movie);
var movie2 = Object.create(Movie);
var movie3 = Object.create(Movie);

movie1.init("Silence", 2017, "Martin Scorsese");
movie2.init("Swiss Army Man", 2016, "Spike Jonze");
movie3.init("Casablanca", 1959, "Roman Polanski");

var movies = [];
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

movies.forEach(function(movie) {
    console.log(movie.decrire());
});
