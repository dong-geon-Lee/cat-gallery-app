const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectedDB = require("./config/database");
const cats = require("./routes/cats");

dotenv.config();
connectedDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/cats", cats);

app.listen(port, () => console.log(`http://localhost:${port}`));
