var nb1 = Number(prompt("Choisissez un nombre :"));
var nb2 = Number(prompt("Bien, maintenant choisissez un deuxieme nombre :"));

if (nb1 > nb2) {
    console.log(nb1 + " est plus grand que " + nb2 + ".");
} else if (nb1 < nb2) {
    console.log(nb1 + " est plus petit que " + nb2 + ".");
} else {
    console.log("Les deux nombres saisis sont égaux !");
}
