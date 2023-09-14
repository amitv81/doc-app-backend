const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Patient = sequelize.define(
  "patients",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mobile: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    // age: {
    //   type: Sequelize.NUMBER,
    //   allowNull: true,
    // },
  },
  {
    paranoid: true,
  }
);

module.exports = Patient;
