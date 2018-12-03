const express = require("express");
const path=require("path");
const router = express.Router();

const rootDir=require('../utils/path.js');




router.get("/add_product", (req, res, next) => {
//   res.send(
//     '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
//   );
//   res.sendFile(path.join(__dirname,'..','views','add_product.html'))
  res.sendFile(path.join(rootDir,'views','add_product.html'))
});

//triggered for all requests
// app.use("/product",(req,res,next)=>{
//     console.log('req.body: ',req.body);
//     res.redirect("/");
// })
router.post("/add_product",(req,res,next)=>{
    console.log('req.body: ',req.body);
    res.redirect("/");
});

module.exports = router;
