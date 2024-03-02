//video-14

// module.exports = (a, b) => { //method-2

//method-3
// const add = (a, b) => {
//   return a + b;
// };
// module.exports = add; //method 1 (normal method)

//method-3
// const subtract = (a, b) => {
//   return a - b;
// };


//method-3 for more than one exports
// module.exports = {
//   add: add,
//   subtract: subtract,
// };

//method-4
module.exports.add=(a,b)=>{
    return a+b;
}

module.exports.subtract=(a,b)=>{
    return a-b;
}

//method-5
// replace module.exports to export --> module.exports.add --> exports.add
