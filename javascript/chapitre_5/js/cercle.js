function perimetre(r) {
    var calculPerimetre = 2 * Math.PI * r;
    return calculPerimetre;
}

function aire(r) {
    var calculAire = Math.pow(r, 2) * Math.PI;
    return calculAire;
}

var rayonUser = Number(prompt("Indiquez le rayon d'un cercle en cm :"));

console.log("Le perimetre de votre cercle est egal à : " + perimetre(rayonUser) + " cm."); // appel de la fonction 'perimetre' avec la variable rayonUser passée en argument (parametre 'r')
console.log("L'aire de votre cercle est egale à : " + aire(rayonUser) + " cm².");

/* Ou alors sans declarer de variables locales dans les fonctions :

function perimetre(r) {
    return 2 * Math.PI * r;
}

function aire(r) {
    return Math.pow(r, 2) * Math.PI;
}
