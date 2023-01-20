const router = require("express").Router();
const { getCats, addCats } = require("../controllers/cats");
const upload = require("../middleware/multerUpload");

router.get("/", getCats);
router.post("/", upload.single("image"), addCats);

module.exports = router;
