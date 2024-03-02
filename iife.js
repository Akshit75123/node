//video-11
//iife - immediately invoked function expression

(function () {
  const superHero = "Batman";
  console.log(superHero);
})();

(function () {
  const superHero = "Superman";
  console.log(superHero);
})();

// With iife, each function has got its private scope.
// Before a module code is executed, Node.js will wrap it with a function Wrapper that provides module scope.
// This saves us from having to worry about conflicting variables or functions
// There is a proper encapsulation and resuability is unaffected
