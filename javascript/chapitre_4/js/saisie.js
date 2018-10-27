var saisie = Number(prompt("Tapez un nombre entre 50 et 100 :"));
while ((saisie < 50) || (saisie > 100)) {
    var saisie = Number(prompt("Tapez un nombre entre 50 et 100 :"));
}
alert("OK U WIN");

/* Ou alors :

var nombre = 0;
while ((nombre < 50) || (nombre > 100)) { ---> Puisque effectivement nombre < 50 la condition donne TRUE et le bloc est lu, se qui lancera le prompt.
    nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));
}
