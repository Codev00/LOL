const express = require("express");
const router = express.Router();
const Hero = require("../controllers/api.hero");
const Skin = require("../controllers/api.skin");
const multer = require("multer");
// multer middleware
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + file.originalname);
  },
});

let skins = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./skins");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("avatar");
let skin = multer({
  storage: skins,
}).single("skin");

router.route("/hero").get(Hero.getAllHero).post(upload, Hero.createHero);

router
  .route("/hero/:id")
  .get(Hero.getHero)
  .put(upload, Hero.updateHero)
  .delete(Hero.deleteHero);

// Skins
router.route("/skin").get(Skin.getAllSkin).post(skin, Skin.createSkin);

router
  .route("/skin/:id")
  .get(Skin.getSkin)
  .put(skin, Skin.updateSkin)
  .delete(Skin.deleteSkin);
module.exports = router;
