// wasm.config.js
module.exports = {
  emscripten_path: '/Users/UIS/emsdk',
  inputfile: './cpp/lib.cpp',
  outputfile: './wasm/lib.js',
  exported_functions: [
    '_fib',
  ],
  flags: [
    '-s WASM=1',
    '-s ASSERTIONS=1',
    '-O3',
  ],
};

