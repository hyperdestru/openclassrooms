var prixHT = Number(prompt("Indiquez le prix HT :"));
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);
alert("Le prix TTC est donc de " + prixTTC + "€ !");
