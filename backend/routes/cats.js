const { getCats, addCats } = require("../controllers/cats");

const router = require("express").Router();

router.get("/", getCats);
router.post("/", addCats);

module.exports = router;
