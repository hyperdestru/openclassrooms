/* while (true && true === true){

Je fais partir une boucle qui sera toujours TRUE pour pouvoir
utiliser le 'continue' aprés le 'else' et redemander le jour en cas d'erreur
de saisie, par contre cela a aussi pour effet de redemander le jour a chaque
fois. Même en cas de saisie correcte. */

var jour = (prompt("Quel jour sommes nous ?"));

if ((jour === "Lundi") || (jour === "lundi")) {
    console.log("Et bien demain nous serons Mardi.");
} else if ((jour === "Mardi") || (jour === "mardi")) {
    console.log("Et bien demain nous serons Mercredi.");
} else if ((jour === "Mercredi") || (jour === "mercredi")) {
    console.log("Et bien demain nous serons Jeudi.");
} else if ((jour === "Jeudi") || (jour === "jeudi")) {
    console.log("Et bien demain nous serons Vendredi.");
} else if ((jour === "Vendredi") || (jour === "vendredi")) {
    console.log("Et bien demain nous serons Samedi.");
} else if ((jour === "Samedi") || (jour === "samedi")) {
    console.log("Et bien demain nous serons Dimanche.");
} else if ((jour === "Dimanche") || (jour === "dimanche")) {
    console.log("Et bien demain nous serons Lundi.");
} else {
    alert("Oups ceci n'est pas un jour de semaine ! \nVoulez-vous continuer ?")
    /* continue; Avec la methode 'while' */
}
/* } Pareil */

/******************************************************************************/
/* Autre methode avec switch, mais ne gère pas les OU :

switch (jour) {
  case "lundi"
  console.log("Et bien demain nous serons Mardi.");
  break;

case "mardi"
  console.log("Et bien demain nous serons Mercredi.");
  break;

case "mercredi"
  console.log("Et bien demain nous serons Jeudi.");
  break;

case "jeudi"
  console.log("Et bien demain nous serons Vendredi.");
  break;

case "vendredi"
  console.log("Et bien demain nous serons Samedi.");
  break;

case "Samedi"
  console.log("Et bien demain nous serons Dimanche.");
  break;

case "dimanche"
  console.log("Et bien demain nous serons Lundi.");
  break;

default:
  console.log("Nous n'avons pas compris :(" );
} */
