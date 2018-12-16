const fs = require("fs");
const path = require("path");
const uuid4 = require("uuid4");

const Cart = require("./cart.js");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      //update if id exist
      if (this.id) {
        const existingProductIndex = products.findIndex(p => p.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });

        //save new product
      } else {
        this.id = uuid4();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static delete(id) {
    getProductsFromFile(products => {
      console.log("del: ", id);
      const product = products.find(x => x.id === id);

      const delProducts = products.filter(x => x.id !== id);
      fs.writeFile(p, JSON.stringify(delProducts), err => {
        console.log(err);
        if (!err) {
          Cart.deleteFromCart(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(x => x.id === id);
      cb(product);
    });
  }
};
