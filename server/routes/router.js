const express = require("express");
const router = express.Router();
const Hero = require("../controllers/api.hero");
const Skin = require("../controllers/api.skin");
const User = require("../controllers/api.user");
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

let upload = multer({
  storage: storage,
}).single("avatar");
let skin = multer({
  storage: storage,
}).single("skins");

router.route("/hero").get(Hero.getAllHero).post(upload, Hero.createHero);

router
  .route("/hero/:id")
  .get(Hero.getHero)
  .put(upload, Hero.updateHero)
  .delete(Hero.deleteHero);

// Skins
router.route("/skins").get(Skin.getAllSkin).post(skin, Skin.createSkin);

router
  .route("/skins/:id")
  .get(Skin.getSkin)
  .put(skin, Skin.updateSkin)
  .delete(Skin.deleteSkin);

// User
router.route("/user").get(User.getAllUser).post(User.createUser);

router
  .route("/user/:id")
  .get(User.getUser)
  .put(User.updateUser)
  .delete(User.deleteUser);
module.exports = router;
