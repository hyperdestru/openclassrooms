var form = document.getElementById("formulaire");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var temoignage = {
    pseudo: event.target.elements.pseudo.value,
    evaluation: event.target.elements.avis.value,
    message: event.target.elements.message.value
  }

  ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function(reponse) {
    var msgElt = document.createElement("p");
    msgElt.textContent = "Avis bien envoyé";
    document.getElementById("resultat").appendChild(msgElt);
  }, true);
});
