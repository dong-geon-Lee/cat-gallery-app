const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (_, res) => {
  res.status(200).json({ message: "작동하고 있어요" });
});

app.listen(port, () => {
  console.log(`Running http://localhost:${port}/`);
});
