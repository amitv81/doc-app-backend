var http = require("http");
const Joi = require("joi");
const express = require("express");
const { request } = require("https");

// const bodyParser = require("body-parser");
// const addProductRoute = require("./routes/addProduct");
const productRoute = require("./routes/routes");
// const products = require("./routes/product");
const myExpressRoutes = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
myExpressRoutes.use(express.json());
//adding this line to get form submited value
myExpressRoutes.use(bodyParser.json());
myExpressRoutes.use(bodyParser.urlencoded({ extended: false }));
// adding this line to handle static files(non routed files), example main.css
myExpressRoutes.use(express.static(path.join(__dirname, "public")));
// Calling routes
myExpressRoutes.use(cors({ origin: "http://localhost:3000" }));
// myExpressRoutes.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-type",
//     "Authorization"
//   );
//   next();
// });

myExpressRoutes.use(productRoute);
// const corsOptions = {
//   origin: "http://localhost:8080",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// myExpressRoutes.use(cors(corsOptions));
// myExpressRoutes.use(products);
// myExpressRoutes.use("/my-products", addProductRoute);

// db.execute("SELECT * FROM `node-complete`.products")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// handeling 404 page - this can move to its own page
// myExpressRoutes.use((req, res, next) => {
//   res.status(404).send("<h1>Page not found</h1> ");
// });

//create a server object:
//###### Use this in case of 1st type export (routes.js)
myExpressRoutes.listen(8080, () => {
  console.log("server is up");
});
// http.createServer(myExpressRoutes).listen(3001);
//the server object listens on port 8080
//##### Use this in case of 2nd and 3rd type export (routes.js) #####
//http.createServer(myRoutes.myhandeler).listen(8080); //the server object listens on port 8080
//console.log(myRoutes.someText);
