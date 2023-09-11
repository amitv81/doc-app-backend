const db = require("../util/database");

module.exports.fetchAll = function () {
  return db.execute("SELECT * FROM products");
};

// Add new product
module.exports.addProduct = ({ title, price, description, imageUrl }) => {
  return db.execute(
    "INSERT INTO products (title, price, description ,imageUrl) VALUES (?,?,?,?)",
    [title, price, description, imageUrl]
  );
};

// Get single record
module.exports.fetchById = function (id) {
  return db.execute("SELECT * FROM products WHERE id = ?", [id]);
};

// Delete single record
module.exports.deleteRecordById = function (id) {
  return db.execute("DELETE FROM products WHERE id = ?", [id]);
};

// Update product
module.exports.editProduct = ({ title, price, description, imageUrl }, id) => {
  const sqlQuery = db.format("UPDATE products SET ? WHERE id = ?", [
    {
      title,
      price,
      description,
      imageUrl,
    },
    id,
  ]);
  return db.execute(sqlQuery);
};

// module.exports.deleteRecordById = function (id, callback) {
//   const query = "DELETE FROM products WHERE id = ?";
//   return db.query(query, [id], (err, result) => {
//     if (err) {
//       callback(err, null);
//       return;
//     }
//     callback(null, result);
//   });
// };
