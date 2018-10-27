ajaxGet("http://localhost/projects/javascript-web-srv/data/langages.txt", function(reponse) {
    var splited = reponse.split(";");
    splited.forEach(function(langage) {
        var liElt = document.createElement("li");
        liElt.textContent = langage;
        document.getElementById("langages").appendChild(liElt);
    });
});
