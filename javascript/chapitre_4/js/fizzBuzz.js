for (i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


/* Ou la technique de la concatenation de String :

for (var nombre = 1; nombre <= 100; nombre++) {
    var message = ""; --> variable message initialement vide
    if (nombre % 3 === 0) {
        message += 'Fizz'; --> Divisible par 3 : On incremente le message initialement vide de'Fizz'
    }
    if (nombre % 5 === 0) { --> A noter l'utilisation du if et non du else if !
        message += 'Buzz'; --> Divisible par 5 : On incremente message initialement vide ( = si le premier if renvoie FALSE) de 'Buzz' MAIS SI le premier if est TRUE alors message n'est plus vide
        il comporte deja 'Fizz' et alors s'y ajoute le 'Buzz' !
    }
    if (message === "") {
        // Si message est vide, le nombre n'est divisible ni par 3, ni par 5 :
        // le message affiché sera le nombre
        message = nombre;
    }
    console.log(message);
}
