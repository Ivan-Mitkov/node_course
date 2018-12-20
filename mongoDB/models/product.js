const mongodb=require('mongodb');
const getDB = require("../util/database").getDB;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  save() {
    //get connection to database
    const db = getDB();
    //Create a new Collection instance. Inserts a single document into MongoDB.
    //If documents passed in do not contain the _id field,
    //one will be added to each of the documents missing it by the driver,
    // mutating the document.
    return db
      .collection("products") //return to use it in promise chain
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  static fetchAll() {
    //get connection to database
    const db = getDB();
    //find return a cursor, toArray return all but better option is to use pagination
    //toArray returns a promise
    return db
      .collection("products")
      .find()
      .toArray()
      .then(products=>{
        // console.log(products);
        return products
      })
      .catch(err=>{
        console.log(err)
      });
  }
  static findById(prodId){
    const db = getDB();
   
    return db
    .collection("products")
    //ObjectId is object and in order to get id use the following
    .find({_id:new mongodb.ObjectID(prodId)})
    .next()//Get the next available document from the cursor, returns null if no more documents are available.
    .then(product=>{
      // console.log(products);
      console.log('ID: ',typeof(new mongodb.ObjectID(prodId)))
      return product
    })
    .catch(err=>{
      console.log(err)
    });
  }
}

module.exports = Product;
