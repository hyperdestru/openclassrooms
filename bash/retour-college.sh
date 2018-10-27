#!/bin/bash

# La variable d est egale a la valeur de la racine carrée du nombre en 1er parametre multiplié par le nombre en 2eme parametre du script
# scale=2 : on arrondi au 2eme chiffre aprés la virgule

d=$(echo "scale=2; sqrt($1) * $2" | bc)

echo "!ep1 -rep $1"



