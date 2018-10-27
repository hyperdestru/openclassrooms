var boutonStart = document.getElementById("demarrer");
var boutonStop = document.getElementById("arreter");
var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var vitesse = 7;
var sens = 1;
var animationBallon = null;

function moveBall() {
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if ((xBallon + largeurBallon > xMax) || xBallon < 0) {
        sens *= -1;
    }
    ballon.style.left = (xBallon + vitesse * sens) + "px";
    animationBallon = requestAnimationFrame(moveBall);
}

boutonStart.addEventListener("click", function(event) {
    moveBall();
    boutonStop.disabled = false;
    event.target.setAttribute("disabled", true);
});

boutonStop.addEventListener("click", function(event) {
    cancelAnimationFrame(animationBallon);
    event.target.disabled = true;
    boutonStart.disabled = false;
});
