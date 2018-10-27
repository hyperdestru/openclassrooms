var choix = String(prompt("On joue a ni oui ni non, ça te vas ?"));

while ((choix !== "oui") && (choix !== "non")) {
    var choix = String(prompt("On joue a ni oui ni non, ça te vas ?"));
}
console.log("Perdu.");
