ajaxGet("http://localhost/projects/javascript-web-srv/data/tableaux.json", function(reponse) {
    JSON.parse(reponse).forEach(function(tableau) {
        var ligne = document.createElement("tr");
        var cellNom = document.createElement("td");
        var cellAnnee = document.createElement("td");
        var cellPeintre = document.createElement("td");
        cellNom.textContent = tableau.nom;
        cellAnnee.textContent = tableau.annee;
        cellPeintre.textContent = tableau.peintre;
        ligne.appendChild(cellNom);
        ligne.appendChild(cellAnnee);
        ligne.appendChild(cellPeintre);
        document.getElementById("tableau").appendChild(ligne);
    });
});
document.getElementById("tableau").style.border = "3px solid black";
