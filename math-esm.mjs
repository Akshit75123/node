//video-16 ES Modules
//At the time Node.js was created, there was no built-in module system in JavaScript
//Node.js defaulted to CommonJS as its module system.
// As of ES2015, JavaScript does have a standardised module system as part of the language itself
//That module system is called ECMAScript Modules or ES Modules or ESM for short

// const add = (a, b) => {
//   return a + b;
// };

// export default add; //method- 1

//method-2
// export default(a, b) => {
//   return a + b;
// };

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

export default {
  add: add,
  subtract: subtract,
};
