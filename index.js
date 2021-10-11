const express = require("express");
const app = express();

app.get("/product", (req, res) => {
  res.status(200).send(req.query);
});

app.listen(3000);
