const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent.toString());
      }

      const existingProductIndex = cart.products.findIndex(p => p.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      //second + is to converted to a number
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }
  static deleteFromCart(id, price) {
    fs.readFile(p, (err, data) => {
      if (err) {
        return;
      }
      const updatedCart = JSON.parse(data.toString());
      
      const product = updatedCart.products.find(
        x => x.id === id
      );
      if(!product){
        return;
      }
      const howManyProductWithThisId=product.qty;
      updatedCart.products=updatedCart.products.filter(x => x.id !== id);
      updatedCart.totalPrice -= price * howManyProductWithThisId;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }

  static getCart(cb){
    fs.readFile(p, (err, data) => {
      const cart = JSON.parse(data.toString());
      if (err) {
        cb(null)
      }else{
        cb(cart);
      }     
    })
  }
};
