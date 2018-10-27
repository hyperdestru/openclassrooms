var h = Number(prompt("Indiquez les heures :"));
var min = Number(prompt("Indiquez les minutes :"));
var sec = Number(prompt("Indiquez les secondes :"));

if ((h >= 0) && (h <= 23) &&
    (min >= 0) && (min < 60) &&
    (sec >= 0) && (sec < 60)) { /* --> Dans le cas où toutes les entrées sont bonnes. */
    sec += 1; /* ...Et que pas de cas particuliers donc + 1 seconde */
    if (sec === 60) { /* ...Par contre si on est a 60 secondes alors on les remets a zero et ajoute 1 minute */
        sec = 0;
        min += 1;
        if (min === 60) { /* Et que EN PLUS les minutes sont a 60 et bien on les remets a zero et on ajoute 1 heure */
            min = 0;
            h += 1;
            if (h > 22) { /* Et si EN PLUS il est 23h, et bien on remets les heures a zero, du coup comme on est en cascade, TOUT est a zero */
                h = 0;
            }
        }
    }
    console.log("Il sera " + h + "h" + " " + min + "m" + " " + sec + "s."); /* Une fois les if passés en revue, comme on est dans le cas des données correctes, on affiche les h, min et sec en decoulant. */
} else {
    console.log("Au moins une donnée est invalide.");
}

/* C'est ce que j'avais fait au debut, mais je faisais un console.log a chaque bloc testé, du coup, comme etant en cascade tous les console.log s'affichait.
Alors qu'en fait, on test tous les blocs et A LA FIN on affiche le resultat qui sera EN FONCTION du bloc qui donnera TRUE ! */
