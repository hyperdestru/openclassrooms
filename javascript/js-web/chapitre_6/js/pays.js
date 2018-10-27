// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var inputElt = document.querySelector("input");
var suggest = document.getElementById("suggestions");

inputElt.addEventListener("input", function() {
    suggest.innerHTML = "";
    listePays.forEach(function(pays) {
        if (pays.indexOf(inputElt.value) === 0) {
            var suggestElt = document.createElement("div");
            suggestElt.classList.add("suggestion");
            suggestElt.textContent = pays;

            suggestElt.addEventListener("click", function(event) {
                inputElt.value = event.target.textContent;
                suggest.innerHTML = "";
            });
            suggest.appendChild(suggestElt);
        }
    });
});
