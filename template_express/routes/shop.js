const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData=require('./admin.js');

const router = express.Router();


// router.get('/', (req, res, next) => {
//   console.log(adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });
router.get('/', (req, res, next) => {
 const products=adminData.products;
  res.render('shop',{prods:products,pageTitle:'Shop',path:'/'});
});

module.exports = router;
