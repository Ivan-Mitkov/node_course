const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoUrl = require("../mongoAtlasConfig");

let _db;

//Use the client.connect method to connect to a running MongoDB deployment.
const mongoConnect = cb => {
  MongoClient.connect(
    mongoUrl.shopUrl.toString(),
    { useNewUrlParser: true }
  )
    .then(client => {
      console.log("Connected");
      //connect client to database
      _db = client.db();
      cb(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw new Error("No database found!");
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
