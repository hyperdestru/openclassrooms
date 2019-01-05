#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Prototypes
void newGame();
void menuContinue();

int main(int argc, char *argv[]) {

  srand(time(NULL));
  const int MIN = 1;
  int MAX = 0;
  int gameOn = 1;
  int level = 1;
  int guess = 0;
  const int maxMoves = 6;

  while (gameOn == 1) {
    newGame();

    // Gestion des niveaux :
    printf("Choisi un niveau [1, 2 ou 3] :\n");
    scanf("%d", &level);
    if (level == 1) {
      MAX = 100;
    } else if (level == 2) {
      MAX = 1000;
    } else if (level == 3) {
      MAX = 10000;
    } else {
      printf("Entree inconnue !\n");
      continue;
    }

    int nombreRandom = (rand() % (MAX - MIN + 1)) + MIN;
    int i = 1;
    // Ligne suivante a decommenter pour voir la solution et faire des tests :
    // printf("(solution : %d)\n", nombreRandom);

    for (i = 1; i <= 6; i++) {
      printf("Proposes un nombre :\n");
      scanf("%d", &guess);

      if (guess > nombreRandom) {
        printf("%d est trop grand. Plus que %d tour(s)\n", guess, maxMoves - i);
      } else if (guess < nombreRandom) {
        printf("%d est trop petit. Plus que %d tour(s)\n", guess, maxMoves - i);
      } else {
        // Scenario gagnant :
        printf("Bien joué ! Le nombre etait bien %d. Tu as trouvé en %d "
               "coup(s) !\n",
               nombreRandom, i);
        menuContinue();
        scanf("%d", &gameOn);
        break;
      }
      // Scenario perdant (plus de coups):
      if ((maxMoves - i) == 0) {
        printf("Perdu ! T'avais que 6 coups. Le nombre etait %d.\n",
               nombreRandom);
        menuContinue();
        scanf("%d", &gameOn);
        break;
      }
    }
  }
  return 0;
}

// Fonctions :
// Affiche un menu de bienvenue
void newGame() {
  printf("*****************************************************************\n");
  printf("THE GUESSGAME | 6 chances pour trouver le nombre mystere.\n");
  printf("*****************************************************************\n");
  printf("# LEVEL 1 - ENTRE 1 & 100\n");
  printf("# LEVEL 2 - ENTRE 1 & 1000\n");
  printf("# LEVEL 3 - ENTRE 1 & 10000\n");
  printf("*****************************************************************\n");
}

// Affiche un menu de replay
void menuContinue() {
  printf("*****************************************************************\n");
  printf("1-REJOUER | 0-QUITTER\n");
  printf("*****************************************************************\n");
}
