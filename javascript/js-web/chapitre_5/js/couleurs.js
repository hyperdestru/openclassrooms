var divElts = document.getElementsByTagName("div");

document.addEventListener("keypress", function(event) {
    for (i = 0; i < divElts.length; i++) {
        if (String.fromCharCode(event.charCode) === "j") {
            divElts[i].style.backgroundColor = "yellow";
        } else if (String.fromCharCode(event.charCode) === "r") {
            divElts[i].style.backgroundColor = "red";
        } else if (String.fromCharCode(event.charCode) === "v") {
            divElts[i].style.backgroundColor = "green";
        } else if (String.fromCharCode(event.charCode) === "b") {
            divElts[i].style.backgroundColor = "blue";
        } else {
            divElts[i].style.backgroundColor = "white";
        }
    }
});
