const fs = require("fs"); //include the File System module for CRUD
var restaurants = [];

// Convert Array to Object
function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) rv[i] = arr[i];
  return rv;
}

class logic {
  readText() {
    // read file form text file, and converted Buffer to a string
    var text = fs.readFileSync("./models/dump.txt").toString("utf-8");

    // split text by new line
    var textByLine = text.split("\n");
    // console.log(textByLine);

    // Format the text to object
    for (let i = 0; i < textByLine.length; i++) {
      var temptext = textByLine[i].split("menu");
      var temptext1 = temptext[1].split("review");
      var restaurant = temptext[0].replace(",", "");
      var menu = temptext1[0].split(",");
      menu = menu.filter((e) => e !== "");
      var review = temptext1[1].split(",");
      review = review.filter((e) => e !== "");
      var point = review[0];
      var comment = review.slice(1);
      //   console.log(restaurant);
      //   console.log(menu);
      //   console.log(point);
      //   console.log(comment);

      var obj = {
        restaurant: restaurant,
        menu: menu,
        review: {
          point: point,
          comment: comment,
        },
      };
      restaurants.push(obj);
    }
    return restaurants;
  }
}
module.exports = logic;
