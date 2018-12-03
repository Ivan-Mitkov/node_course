const express = require("express");
const path=require("path");
const router=express.Router();

const rootDir=require('../utils/path.js');


//get make exact maching use search for beggining
router.get("/", (req, res, next) => {
    // res.send("<h1>Helllo from express</h1>");
    //dont use /view in other OS will not work
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootDir,'views','shop.html'))
  });
  
module.exports=router;