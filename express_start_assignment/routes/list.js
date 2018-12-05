const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = path.dirname(process.mainModule.filename);
console.log(rootDir);

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "list.html"));
});

module.exports = router;
