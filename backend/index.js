const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectedDB = require("./config/database");
const cats = require("./routes/cats");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/cats", cats);

connectedDB();
app.listen(port, () => console.log(`http://localhost:${port}`));
