var choixCouleurTexte = prompt("Choisissez la couleur du texte : ");
var choixCouleurFond = prompt("Choisissez la couleur de fond du texte : ");

var divsElts = document.getElementsByTagName("div");
for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = choixCouleurTexte;
    divsElts[i].style.backgroundColor = choixCouleurFond;
}
