var word = "";
var words = [];

while (word !== "stop") {
    word = prompt("Saisissez un mot ou dites stop: ");
    if (word !== "stop") {
        words.push(word);
    }
}

words.forEach(function(w) {
    console.log(w);
});
