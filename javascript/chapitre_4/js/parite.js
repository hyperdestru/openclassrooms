var nb = Number(prompt("Saisissez un nombre :"));

for (var i = nb; i < nb + 10; i += 1) {
    if (i % 2 === 0) {
        console.log(i + " est pair.");
    } else {
        console.log(i + " est impair.");
    }
}
