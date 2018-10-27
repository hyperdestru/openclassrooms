var form = document.getElementById("formulaire");
var contenu = document.getElementById("contenu");
contenu.style.fontFamily = "arial";

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Vidage du contenu a chaque nouvelle recherche
    contenu.innerHTML = "";
    var username = form.elements.username;

    // Cet url de l'api github permet de target un user a la fois uniquement en fonction du login cherché
    ajaxGet("https://api.github.com/users/" + username.value, function(reponse) {
        var user = JSON.parse(reponse);
        // Cree les differentes parties du contenu
        var img = document.createElement("img");
        var login = document.createElement("p");
        var employer = document.createElement("p");
        var blogLink = document.createElement("a");
        var admin = document.createElement("p");

        // Si la recherche match bien avec un user existant dans l'api
        if (username.value === user.login) {
            img.src = user.avatar_url;
            img.style.height = "200px";
            img.style.width = "200px";
            img.style.marginTop = "30px";
            contenu.appendChild(img);

            login.textContent = user.name;
            login.style.fontWeight = "bold";
            login.style.fontSize = "1.2em";
            contenu.appendChild(login);

            employer.textContent = "Work for " + user.company;
            contenu.appendChild(employer);

            blogLink.href = user.blog;
            blogLink.textContent = user.blog;
            contenu.appendChild(blogLink);

            if (user.site_admin === false) {
                admin.textContent = user.name + " is not a GitHub admin.";
                contenu.appendChild(admin);
            } else {
                admin.textContent = user.name + " is a GitHub admin.";
                contenu.appendChild(admin);
            }

            // Si ça ne match pas
        } else {
            var alerte = document.createElement("p");
            alerte.textContent = "Profil introuvable...";
            alerte.style.fontWeight = "bold";
            alerte.style.color = "Darkred";
            contenu.appendChild(alerte);
            // Le message d'alerte disparait au bout de 3s puis reset du champ de recherche
            setTimeout(function() {
                alerte.style.display = "none";
                username.focus();
                username.value = null;
            }, 3000);
        }
    });
});
