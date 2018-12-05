const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = path.dirname(process.mainModule.filename);

router.get("/user", (req, res) => {
    console.log('User')
  res.sendFile(path.join(rootDir, "views", "user.html"));
});

module.exports = router;
