const express = require("express");
const myRouter = express.Router();
// const db = require("../util/database");
// // Home page - if I use ".use" instead of ".get" the it will redirect all 404 to home page
// myRouter.get("/", (req, res, next) => {
//   //res.send("<h1>Home page</h1 > ");
//   db.execute("SELECT * FROM products")
//     .then((result) => {
//       res.send(result[0]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// module.exports = myRouter;

const path = require("path");

const shopController = require("../controllers/products");
const sendMsg = require("../controllers/sendMessage");

myRouter.post("/add-record", shopController.postAddProduct);

myRouter.get("/detail/:id", shopController.getSingleProduct);

myRouter.delete("/del-record/:id", shopController.delSingleProduct);

myRouter.get("/products", shopController.getProducts);

myRouter.put("/edit-record/:id", shopController.editProduct);

myRouter.post("/send-message", sendMsg.sendMessage);

module.exports = myRouter;
