const Product = require("../models/product.js");



exports.getProducts = (req, res, next) => {
  //from Product fetchAll where readFile is async
  // so to guaranty that there is data we are using callback
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
     
    });
  });
};

exports.getCart = (req, res, next) => {
  //from Product fetchAll where readFile is async
  // so to guaranty that there is data we are using callback
  Product.fetchAll(products => {
    res.render("shop/cart", {
      prods: products,
      pageTitle: "Cart",
      path: "/cart",
     
    });
  });
};
exports.getOrders = (req, res, next) => {
  //from Product fetchAll where readFile is async
  // so to guaranty that there is data we are using callback
  Product.fetchAll(products => {
    res.render("shop/orders", {
      prods: products,
      pageTitle: "Orders",
      path: "/orders",
     
    });
  });
};
exports.getIndex = (req, res, next) => {
  //from Product fetchAll where readFile is async
  // so to guaranty that there is data we are using callback
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
     
    });
  });
};
exports.getCheckout = (req, res, next) => {
  //from Product fetchAll where readFile is async
  // so to guaranty that there is data we are using callback
  Product.fetchAll(products => {
    res.render("shop/checkout", {
      prods: products,
      pageTitle: "Checkout",
      path: "/checkout",
     
    });
  });
};

//   exports.products = products;
