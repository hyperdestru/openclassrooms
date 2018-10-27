#include <stdio.h>

/*Constantes symboliques :*/
#define MINI 0
#define MAXI 500
#define INTERVALLE 10

main() {

  printf("TEMPERATURE CONVERTER\n\n");

  float far, cel;

  printf("°F\t   °C\n--------------\n");

  for (far = MINI; far <= MAXI; far += INTERVALLE) {
    cel = (5.0 / 9.0) * (far - 32.0);
    printf("%3.0f\t%6.2f\n", far, cel);
  }

  printf("\n°C\t   °F\n--------------\n");

  for (cel = MINI; cel <= MAXI; cel += INTERVALLE) {
    far = cel * (9.0 / 5.0) + 32;
    printf("%3.0f\t%6.2f\n", cel, far);
  }

  printf("\nFIZZBUZZ TEST\n\n");

  int i;

  for (i = 1; i <= 50; i += 1) {
    if (i % 3 == 0) {
      printf("%d --> multiple de 3\n", i);

      if (i % 5 == 0) {
        printf("%d --> multiple de 3 et de 5\n", i);
      }

    } else if (i % 5 == 0) {
      printf("%d --> multiple de 5\n", i);
    } else {
      printf("%d\n", i);
    }
  }

/****************************/

  int c;

  printf(getchar() != EOF);
	

}
