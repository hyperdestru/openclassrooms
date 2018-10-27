// Un petit quizz. Une question est définie par son énoncé et sa réponse :

var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    }, {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    }, {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }, {
        enonce: "A combien est egal i² ?",
        reponse: "-1 !"
    }
];

// Pour afficher le n° des questions :
var numeroQuestion = 1;

// Boucle qui passe en revue le tableau de questions :
questions.forEach(function(question) {
    // Creation de tous les elements constituants :
    var pElt = document.createElement("p");
    var divElt = document.createElement("div");
    var strongElt = document.createElement("strong");
    var iElt = document.createElement("i");
    var divElt2 = document.createElement("div");
    var boutonElt = document.createElement("button");

    // Modification des elements
    strongElt.textContent = "Question " + numeroQuestion++ + " : ";
    iElt.textContent = question.enonce;
    boutonElt.textContent = "Afficher la reponse";

    // Si click sur le bouton : affichage de la reponse et disparition du bouton :
    boutonElt.addEventListener("click", function(event) {
        boutonElt.display = "none";
        divElt2.textContent = question.reponse;
    });

    // Imbrique tous les elements :
    pElt.appendChild(divElt);
    pElt.appendChild(divElt2);
    divElt2.appendChild(boutonElt)
    divElt.appendChild(strongElt);
    divElt.appendChild(iElt);
    document.getElementById("contenu").appendChild(pElt);
});
