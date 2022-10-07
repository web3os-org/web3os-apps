#include <emscripten/emscripten.h>
#include <stdio.h>
#include <string>

extern "C" {

/** 
 * The main function gets called when an instance of the application is created
*/
int main(int argc, char **argv) {
  emscripten_run_script("Kernel.execute('alert Hello from C++!')");
  return 0;
}

void confetti_bomb () {
  emscripten_run_script("Kernel.execute('confetti --startVelocity 100 --scalar 3 --particleCount 200')");
}

int add (int a, int b) {
  return a + b;
}

}