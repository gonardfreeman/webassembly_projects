// index.js
let m = {}
loadWASM().then(wasmModule => {
  m = wasmModule;
  m._fib(4);
});

