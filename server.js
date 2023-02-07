const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const htmlPath = path.resolve(__dirname, "index.html");
  res.setHeader("Content-Type", "text/html");
  fs.createReadStream(htmlPath).pipe(res);
});

app.listen(9000, (req, res) => {
  console.log("App listening in port 9000");
});
