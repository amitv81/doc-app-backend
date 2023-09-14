// const Product = require("../services/products");
const Patient = require("../models/patient");
const Joi = require("joi");
const patientSchema = require("../joiSchema/patientSchema");
// ###### Featching all records ######
exports.getProducts = async (req, res, next) => {
  try {
    const patients = await Patient.findAll({
      //paranoid: true,
    });
    res.json(patients);
  } catch (error) {
    throw new Error(error);
  }
};

// ###### Featching single record ######
exports.getSingleProduct = async (req, res, next) => {
  try {
    const patientId = req.params.id;
    const patient = await Patient.findByPk(patientId);
    await res.json(patient);
  } catch (error) {
    throw new Error(error);
  }

  // UNCOMMENT BELLOW FOR WITHOUT Sequelize
  /*const prodId = req.params.id;
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
    });*/
};

// ###### Delete single record ######
exports.delSingleProduct = async (req, res, next) => {
  try {
    const prodId = req.params.id;
    const product = await Patient.findByPk(prodId);
    await product.destroy();
    res.json({ mesage: "success" });
  } catch (error) {
    throw new Error(error);
  }
  // UNCOMMENT BELLOW FOR WITHOUT Sequelize
  // const prodId = req.params.id;
  // Product.deleteRecordById(prodId)
  //   .then(() => {
  //     res.send("Product Deleted successfully");
  //   })
  //   .catch((err) => {
  //     console.log("Error deleting record: ", err);
  //   });
};

// ###### Inserting new record in DB ######
exports.postAddProduct = async (req, res, next) => {
  try {
    const { value, error } = patientSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    }
    const product = await Patient.create(req.body);

    res.json(product);
  } catch (error) {
    throw new Error(error);
  }

  // UNCOMMENT BELLOW FOR WITHOUT Sequelize
  // // featching user inputs
  // const { title, price, description, imageUrl } = req.body;
  // // Validation schema for user input
  // const prodSchema = Joi.object({
  //   title: Joi.required(),
  //   price: Joi.number().integer().min(0).required(),
  //   description: Joi.any(),
  //   imageUrl: Joi.required(),
  // });
  // const { error } = prodSchema.validate(req.body);
  // if (error) {
  //   return res.status(400).json({ error: error.details[0].message });
  // }
  // Product.addProduct({ title, price, description, imageUrl });
  // res.status(200).json({
  //   message: "Product added successfully",
  // });
};

// ###### Edit record in DB ######
exports.editProduct = async (req, res, next) => {
  try {
    const { value, error } = patientSchema.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    }

    const prodId = req.params.id;
    const product = await Patient.findByPk(prodId);
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
  // UNCOMMENT BELLOW FOR WITHOUT Sequelize
  // // Validation schema for user input
  // const prodSchema = Joi.object({
  //   title: Joi.required(),
  //   price: Joi.number().integer().min(0).required(),
  //   description: Joi.any(),
  //   imageUrl: Joi.required(),
  // });
  // // featching user inputs
  // const prodId = req.params.id;
  // const { title, price, description, imageUrl } = req.body;
  // const { error } = prodSchema.validate(req.body);
  // if (error) {
  //   return res.status(400).json({ error: error.details[0].message });
  // }
  // Product.editProduct({ title, price, description, imageUrl }, prodId);
  // res.status(200).json({
  //   message: "Product updated successfully",
  // });
};
