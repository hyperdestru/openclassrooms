// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    }, {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    }, {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

// Creé la balise <dl> :
var dlElt = document.createElement("dl");

for (i = 0; i < mots.length; i++) {
    // A chaque tour creer une balise <dt>, <strong> et <dd> :
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    var ddElt = document.createElement("dd");

    // La balise <strong> a pour texte le terme au moment de la boucle :
    strongElt.textContent = mots[i].terme;
    ddElt.textContent = mots[i].definition;

    // On met le <strong> (qui contient le terme) dans le <dt> (qui ne contient pas directement de texte)
    // On met le <dt> et le <dd> dans le <dl> :
    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
}
// Donc dans le <dl> on a <dt>, <strong> et <dd>, et <dl> est dans le <div id="contenu"> :
document.getElementById("contenu").appendChild(dlElt);
