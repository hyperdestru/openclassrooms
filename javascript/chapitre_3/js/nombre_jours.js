var mois = Number(prompt("Indiquez un mois en chiffre pour connaître son nombre de jours :"));

if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    console.log("Ce mois contient 30 jours !");
} else if (mois === 2) {
    console.log("En février il y a 28 jours ;)");
} else if (mois < 1 || mois > 12 || isNaN) { /* isNan -−> 'Ou n'est pas un nombre' */
    console.log("Oups, mois invalide.");
} else {
    console.log("Ce mois contient 31 jours !"); /* De base tous les mois contiennent 31 jours */
}

/* On aurait pu aussi faire cet exo avec un switch.. Ou un swith + 1 if.. */
