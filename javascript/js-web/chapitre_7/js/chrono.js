var boutonStart = document.getElementById("start");
var compteurElt = document.getElementById("compteurSec");
var compteurEltMinutes = document.getElementById("compteurMin");
var compteurs = document.getElementById("compteurs");
var intervalChrono = ""
var run = false;

function startSec() {
  var compteur = Number(compteurElt.textContent);
  var compteurMin = Number(compteurEltMinutes.textContent);
  compteurElt.textContent = compteur + 1;
  if (compteurElt.textContent > 60) {
    compteurElt.textContent = 0;
    compteurEltMinutes.textContent = compteurMin + 1;
  }
}

boutonStart.style.backgroundColor = "black";
boutonStart.style.color = "white";
boutonStart.style.border = "none";
boutonStart.style.borderRadius = "7px";
boutonStart.style.width = "90px";
boutonStart.style.height = "40px";
compteurs.style.fontSize = "4.5em";
compteurs.style.fontFamily = "Times";
compteurs.style.marginTop = "5px";

boutonStart.addEventListener("click", function() {
  if (!run) {
    intervalChrono = setInterval(startSec, 1000);
    boutonStart.textContent = "Stop";
    boutonStart.style.backgroundColor = "rgba(255, 26, 152, 0.7)";
  } else {
    clearInterval(intervalChrono);
    boutonStart.textContent = "Start";
    boutonStart.style.backgroundColor = "black";
  }
  run = !run;
});
