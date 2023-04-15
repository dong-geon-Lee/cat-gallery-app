const router = require("express").Router();
const upload = require("../middleware/multerUpload");
const { getCats, addCats } = require("../controllers/cats");

router.get("/", getCats);
router.post("/", upload.single("image"), addCats);

module.exports = router;
