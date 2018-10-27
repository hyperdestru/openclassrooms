var nb = Number(prompt("Saisissez un nombre entre 2 et 9 :"));
for (i = 1; i < 11; i++) {
    if ((nb >= 2) && (nb <= 9)) {
        console.log(nb + " x " + i + " = " + nb * i);
    } else {
        var nb = Number(prompt("Saisissez un nombre entre 2 et 9 :"));
    }
}
