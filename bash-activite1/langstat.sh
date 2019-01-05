#!/bin/bash

#*****MISSION N°1 - Classement des lettres :

#Verifie si il y a un parametre (le fichier dictionnaire)
if [ -z $1 ]
then
  printf 'Attention il manque un fichier dictionnaire en parametre\n'
else
  #Verifie si il y a bien le fichier mis en parametre dans le repertoire de travail courant
  if [ ! -e $1 ]
  then
    printf 'Attention fichier dictionnaire introuvable dans le repertoire courant !\n' 2>/dev/null
  else
    #Tableau 'alphabet' - Lettres a chercher
    alphabet=('A' 'B' 'C' 'D' 'E' 'F' 'G' 'H' 'I' 'J' 'K' 'L' 'M' 'N' 'O' 'P' 'Q' 'R' 'S' 'T' 'U' 'V' 'W' 'X' 'Y' 'Z')

    #Passe en revue l'alphabet
    for lettre in ${alphabet[*]}
    do
      #Chaque lettre est recherchée (grâce au regex : [$lettre]) dans le fichier mis en parametre
      #Avec le param -c, egrep (ou grep -E) compte les occurences du regex recherché (ici de A a Z) et renvoie directement le nombre et non le mot
      #egrep pipe vers sed "s/$/(...)" qui rajoute la lettre correspondante a chaque nombre trouvé, le tout est redirigé vers sorted_numbers (les erreurs dans /dev/null)
      egrep -c [$lettre] $1 | sed "s/$/ fois pour le $lettre/" >> sorted_numbers 2>/dev/null
    done

    printf 'Classement des lettres :\n'
    #Trie du plus grand au plus petit (-r) les nombres trouvés mis dans le fichier de sortie sorted_numbers
    sort -nr sorted_numbers

    #Supprime le fichier temporaire de sortie
    rm sorted_numbers

    #*****MISSION N°2 :
    #Demande un nombre 'n' a l'utilisateur et renvoie le(s) mot(s) du dico comportant 'n' lettre(s)
    #Puis propose a l'utilisateur de les afficher ou non

    #Nom du parametre :
    parametre2='--how-many-words'

    #Verifie que le parametre pour la mission 2 soit present et correspond bien
    if [ ! -z $2 ] && [ $2 = $parametre2 ]
    then
      read -p 'Choisisez un nombre entre 1 et 25 : ' nb_lettres
      if [ $nb_lettres -gt 0 ] && [ $nb_lettres -lt 26 ]
      then
        echo 'Il existe :'
        #Cherche le nombre de mot(s) formés du nombre de lettre(s) choisi par l'utilisateur (cf. regex : ^..{$nb_lettres}$ )
        egrep -c ^..{$nb_lettres}$ $1 | sed "s/$/ mot(s) de $nb_lettres lettre(s) dans le dico./"

        read -p 'Voulez vous les afficher ? o = oui / n = non : ' reponse
        if [ $reponse = 'o' ]
        then
          #Si oui : affichage des mot(s) trouvé(s) (donc egrep sans le -c cette fois)
          egrep ^..{$nb_lettres}$ $1
        fi
      else
        printf 'Intervalle non respectee, too bad !\n'
      fi
    else
      printf 'Parametre pour la mission 2 manquant ou erroné !\n'
    fi
  fi
fi
