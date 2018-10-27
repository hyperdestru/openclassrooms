var moyenne = Number(prompt("Saisissez votre moyenne au Bac :"));

if (moyenne < 10) {
    console.log("Desolé mais avec " + moyenne + "/20 vous êtes recalé.")
} else if ((moyenne >= 10) && (moyenne < 12)) {
    console.log("Felicitations, vous avez eu " + moyenne + "/20, vous êtes donc reçu(e) !");
} else if (moyenne >= 12) {
    console.log("BRAVO ! Avec " + moyenne + "/20 vous êtes reçu(e) avec mention !");
} else {
    console.log("Uhhmmm, il y a l'air d'y avoir un problème...");
}
