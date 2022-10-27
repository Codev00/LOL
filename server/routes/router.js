const express = require("express");
const router = express.Router();
const Hero = require("../controllers/api.hero");
const multer = require("multer");
// multer middleware
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatar");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("avatar");

router.route("/hero").get(Hero.getAllHero).post(upload, Hero.createHero);

router
  .route("/hero/:id")
  .get(Hero.getHero)
  .put(upload, Hero.updateHero)
  .delete(Hero.deleteHero);
module.exports = router;
