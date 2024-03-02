//video-12
// passing parameters to the iife

(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Hey");

// before loading the module, node wraps the module in a function (iife) that contains five parameters i.e. 
// exports, require, module, __filename, __dirname
