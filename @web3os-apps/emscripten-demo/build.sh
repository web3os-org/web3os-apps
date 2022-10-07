#!/usr/bin/env sh

em++ src/main.cpp -o dist/index.html -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXPORTED_FUNCTIONS=_main,_add,_confetti_bomb -s EXPORTED_RUNTIME_METHODS=ccall,cwrap
