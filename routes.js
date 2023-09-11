const requestHandelr = (req, res) => {
  var dt = require("./myDateModule");
  var url = require("url");
  // res.write("Today's date is: " + dt.myDateTime()); //write a response to the client
  // res.write(req.url); // print the part of the url that comes after the domain name
  //res.end(); //end the response
  // Parsing query string in url
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
};

// ### 3 Ways to export ###
// 1
module.exports = requestHandelr;
// 2
// module.exports.myhandeler = requestHandelr;
// module.exports.someText = 'Some Text';
// 3
// exports.myhandeler = requestHandelr;
// exports.someText = "Some Text";
