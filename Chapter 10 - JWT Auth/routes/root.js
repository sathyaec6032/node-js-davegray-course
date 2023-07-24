const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  //express also supports regular expression in routing path
  // res.sendFile("./views/index.html", {root: __dirname});
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
