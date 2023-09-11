var http = require("http");
const myRoutes = require("./routes");
//create a server object:

//###### Use this in case of 1st type export (routes.js)
http.createServer(myRoutes).listen(8080); //the server object listens on port 8080
//##### Use this in case of 2nd and 3rd type export (routes.js) #####
//http.createServer(myRoutes.myhandeler).listen(8080); //the server object listens on port 8080
//console.log(myRoutes.someText);
