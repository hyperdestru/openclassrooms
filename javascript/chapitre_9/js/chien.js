var Dog = {
    init: function(name, race, size) {
        this.name = name;
        this.race = race;
        this.size = size;
    },

    barfing: function() {
        var barf = "Whouaa ! Whouuaa !";
        if (this.size > 60) {
            barf = "Whooorf ! Whoorf !";
        } else if (this.size < 25) {
            barf = "Kaaaiiirf ! Kaaiiirf !";
        }
        return barf;
    },

    describe: function() {
        var description = this.name + " est un " + this.race + " et mesure " + this.size + " cm.";
        return description;
    }
};

var dog1 = Object.create(Dog);
var dog2 = Object.create(Dog);
var dog3 = Object.create(Dog);

dog1.init("Crokdur", "matin de Naples", 75);
dog2.init("Pupuce", "bichon", 22);
dog3.init("Medor", "labrador", 58);

var dogs = [];
dogs.push(dog1);
dogs.push(dog2);
dogs.push(dog3);

console.log("Le chenil heberge " + dogs.length + " chien(s) :");
dogs.forEach(function(dog) { // Ici on dit que 'dog' est un element de l'array "dogs", et comme chaque element de l'array est un objet 'Dog' qui possede 3 methode dont barfing()...
    console.log(dog.describe() + " Il aboie : " + dog.barfing());
});
