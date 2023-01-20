const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectedDB = require("./config/database");
const cats = require("./routes/cats");

dotenv.config();
connectedDB();

const app = express();
const port = process.env.PORT || 8000;
const corsOption = { credentials: true, origin: true };

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/cats", cats);

app.listen(port, () => console.log(`http://localhost:${port}`));
