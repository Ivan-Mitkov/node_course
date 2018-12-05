// const http=require('http')
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//>>>>>>using static files for example main.css<<<<<<<
app.use(express.static(path.join(__dirname,'public')))

//>>>ROUTES>>>>adminRoutes is valid middleware '/admin is a filter<<<<<<
app.use("/admin", adminRoutes);
app.use(shopRoutes);


//handle 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server=http.createServer(app);
// server.listen(3000,()=>{
//     console.log('Listen to the port 3000');
// })

app.listen(3000, () => {
  console.log("Listen to the port 3000");
});
