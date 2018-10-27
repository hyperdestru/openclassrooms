var nb1 = Number(prompt("Entrez le nombre 1 :"));
var nb2 = Number(prompt("Entrez le nombre 2 :"));

if ((nb1 < 0) || (nb2 < 0)) {
    console.log("Au moins un des deux nombres est négatif");
} else {
    console.log("Les deux nombres sont positifs ou nuls");
}
