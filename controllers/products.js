const Product = require("../services/products");
const Joi = require("joi");
// ###### Featching all records ######
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

// ###### Featching single record ######
exports.getSingleProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.fetchById(prodId)
    .then((result) => {
      if (result[0].length == 0) {
        return res.status(404).send({
          status: "404",
          msg: "Not found",
          data: null,
        });
      } else {
        res.send(result[0]);
        //res.json(result[0]); // is same as above
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// ###### Delete single record ######
exports.delSingleProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.deleteRecordById(prodId)
    .then(() => {
      res.send("Product Deleted successfully");
    })
    .catch((err) => {
      console.log("Error deleting record: ", err);
    });
};

// ###### Inserting new record in DB ######
exports.postAddProduct = (req, res, next) => {
  // featching user inputs
  const { title, price, description, imageUrl } = req.body;

  // Validation schema for user input
  const prodSchema = Joi.object({
    title: Joi.required(),
    price: Joi.number().integer().min(0).required(),
    description: Joi.any(),
    imageUrl: Joi.required(),
  });

  const { error } = prodSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  Product.addProduct({ title, price, description, imageUrl });

  res.status(200).json({
    message: "Product added successfully",
  });
};

// ###### Edit record in DB ######
exports.editProduct = (req, res, next) => {
  // Validation schema for user input
  const prodSchema = Joi.object({
    title: Joi.required(),
    price: Joi.number().integer().min(0).required(),
    description: Joi.any(),
    imageUrl: Joi.required(),
  });

  // featching user inputs
  const prodId = req.params.id;
  const { title, price, description, imageUrl } = req.body;

  const { error } = prodSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  Product.editProduct({ title, price, description, imageUrl }, prodId);

  res.status(200).json({
    message: "Product updated successfully",
  });
};
