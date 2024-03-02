
//video-28 and 29 (streams and pipes)
// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip=zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt", {
//   //reads data from file.txt in chunks
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// const writeableStream = fs.createWriteStream("./file2.txt"); //writes to the file

// //for pipes

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz")); //chaining of pipe
// readableStream.pipe(writeableStream);

//for streams
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

//video-27 (fs module/promises)
// const fs = require("node:fs/promises");
// fs.readFile("file.txt", "utf-8") //async
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//video-26 (fs module)
// const fs = require("node:fs");

//writing data to the file

//writing asynchronously
// fs.writeFile("./greet.txt","Hello World",(err)=>{
//     if (err){
//         console.log(err)
//     } else {
//         console.log("File written")
//     }
// })

//writing synchronously
// fs.writeFileSync("./greet.txt","Hello World")

// reading file asynchronously
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// //reading file synchronusly
// const fileContent = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContent);

//video-24 (Streams and Buffer)
// const buffer = new Buffer.from("Akshit");
// console.log(buffer.toJSON()); //returns an object containing array of unicode of all characters in the array.
// console.log(buffer) //hexadec numbers

//video-22 (Extending from EventEmitter)
// const PizzaShop = require("./pizza-shop"); //importing the class PizzaShop
// const pizzaShop = new PizzaShop(); //creating an instance of the class

// const DrinkMachine=require("./drink-machine")
// const drinkMachine=new DrinkMachine()

// pizzaShop.on("order", (size, topping) => {
//   console.log(`order recieved! Baking a ${size} pizza with ${topping}`);
//   drinkMachine.serveDrink(size)
// });

// pizzaShop.order("large", "mushroom");
// pizzaShop.displayOrderNumber();

//video-21 (event module)
// const EventEmitter = require("node:events"); //EventEmitter is a class of event module
// const emitter = new EventEmitter(); //emitter is an object of EventEmitter class

// //registering event with on function
// emitter.on("order-pizza", (size, topping) => {
//   console.log(`order recieved! Baking a ${size} pizza with ${topping}`);
// }); // (event, listener function)

// //adding multiple listeners to the same event
// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("serving a complimentary drink");
//   }
// });

// console.log("logging before the events");
// // emitter.emit("order-pizza"); //event
// emitter.emit("order-pizza", "large", "mushroom"); //arguments that are passed to the listeners

// video-20 (callback pattern)

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function higherOrderFunction(callback) {
//   const name = "Akshit";
//   callback(name);
// }

// higherOrderFunction(greet);

//video-19 (path module)
// const path = require("node:path");

// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

// console.log(path.isAbsolute("./data.json")) //false (./)
// console.log(path.isAbsolute(__filename)) //true

// console.log(path.format(path.parse(__filename)))
// console.log(path.parse(__filename))

// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))

// console.log(path.basename(__filename)) //gives the last name of the path
// console.log(path.basename(__dirname))

// console.log(__filename)
// console.log(__dirname)

//video -17 (importing json)
// const data = require("./data"); //first tries to find data.js before data.json
// console.log(data)
// console.log(data);

//video-14 (import export patterns)

// const math = require("./math"); //for method 3

// const { add, subtract } = math; //destructuring

// console.log(add(2, 3));
// console.log(subtract(3, 2));

// const add = require("./math"); for method 1 and method 2
// console.log(add(2, 3));

//video-13 (module caching)
//exporting class
// const SuperHero = require("./super-hero");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");

// console.log(superman.getName());

// exporting function
// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

//video - 11 (modules exports)

// require("./batman");
// require("./superman");

//video - 9 and 10 local module
// const add = require("./add"); //require function loads add function into index.js file (require is CommonJS)

// console.log("Hello from index.js");
// const sum = add(1, 2);
// console.log(sum);
