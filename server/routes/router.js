const express = require("express");
const router = express.Router();
const Hero = require("../controllers/api.hero");
const Skin = require("../controllers/api.skin");
const User = require("../models/user");
const multer = require("multer");
const auth = require("../middleware/auth");
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
// Register user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});
// Login
router.post("/users/login", async (req, res) => {
  //Login a registered user
  try {
    const { username, password } = req.body;
    const user = await User.findByCredentials(username, password);
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/users/account", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});
router.post("/users/account/logout", auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
