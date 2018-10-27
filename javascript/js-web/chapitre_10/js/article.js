var form = document.getElementById("formulaire");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var data = new FormData(form);
  ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function(reponse) {
    var msgElt = document.createElement("p");
    msgElt.textContent = "L'article a bien été ajouté";
    document.getElementById("resultat").appendChild(msgElt);
  });
});
