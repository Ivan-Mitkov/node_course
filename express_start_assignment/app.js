const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const listRoute = require("./routes/list.js");
const userRouter = require("./routes/user.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use( userRouter);
app.use( listRoute);

app.listen(3000, () => {
  console.log("Listen to the port 3000");
});
