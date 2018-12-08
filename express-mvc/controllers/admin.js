const Product = require("../models/product.js");


exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      pageTitle: "Add Product",
      path: "/add-product",
    
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
      const title=req.body.title;
      const imageUrl=req.body.imageUrl;
      const description=req.body.description;
      const price=req.body.price;

    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect("/");
  };

  exports.getProducts = (req, res, next) => {
    //from Product fetchAll where readFile is async
    // so to guaranty that there is data we are using callback
    Product.fetchAll(products => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Product List",
        path: "/admin/products",
    
      });
    });
  };