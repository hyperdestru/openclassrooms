var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for (var i = 0; i < journaux.length; i++) {
    var lienElt = document.createElement("a");
    lienElt.textContent = journaux[i];
    lienElt.href = journaux[i];
    document.getElementById("contenu").appendChild(lienElt);
    document.getElementById("contenu").appendChild(document.createElement("br"));
}
