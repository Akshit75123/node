//video-35 (HTML Routing)

const http=require("node:http")

const server=http.createServer((req,res)=>{
  // res.end(req.url) //root 
  // req.method GET POST PUT DELETE

  if (req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Home Page")
  } else if (req.url==="/about"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("About Page")
  } else if (req.url==="/api"){
    res.writeHead(200,{"Content-Type":"application/JSON"})
    res.end(JSON.stringify({
      firstName:"Bruce",
      lastName:"Wayne"
    }))
  } else {
    res.writeHead(404)
    res.end("Page not found")
  }
})

server.listen(3000,()=>{
  console.log("server listening on port 3000")
})

//video-34 (HTML Template)
// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const name = "Akshit";
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let html = fs.createReadStream("./index.html", "utf-8");
//   html = html.toString().replace("{{name}}", name);
//   res.end(html);
// });

// server.listen(3000, () => {
//   console.log("server listening on port 3000");
// });

//video-33 (HTML response)

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   // const html = fs.readFileSync("./index.html", "utf-8");
//   //reading the content of the other file
//   //this is reading the content of index.html at once rather not in chunks

//   // fs.createReadStream(__dirname + "./index.html").pipe(res); //using streams
//   fs.createReadStream("./index.html").pipe(res) //using streams

//   // res.writeHead(200);

//   // res.end(html); //server response is to display index.html
//   // res.end("<h1>Hello world!</h1>");
// });

// server.listen(3000, () => {
//   //listening request on port 3000
//   console.log("server running on port 3000");
// });

//video-32 (JSON response)

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   };

//   res.writeHead(200, { "Content-Type": "application/json" });

//   res.end(JSON.stringify(superHero)); //

// });

// server.listen(3000, () => {
//   //listening request on port 3000
//   console.log("server running on port 3000");
// });

//video-31 (creating a node server using http built-in module)

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   //   res.writeHead(200);

//   res.end("Hello world!");
// });

// server.listen(3000, () => {
//   //listening request on port 3000
//   console.log("server running on port 3000");
// });
