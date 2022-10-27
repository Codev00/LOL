const Hero = require("../models/hero");
const fs = require("fs");

module.exports = class heroAPI {
  static async getHero(req, res) {
    const id = req.params.id;
    try {
      const hero = await Hero.findById(id);
      res.status(200).json(hero);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async getAllHero(req, res) {
    try {
      const heros = await Hero.find();
      res.status(200).json(heros);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async createHero(req, res) {
    const hero = req.body;
    const imagename = req.file.filename;
    hero.avatar = imagename;
    try {
      await Hero.create(hero);
      res.status(200).json({ message: "Create Successfully!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async updateHero(req, res) {
    const id = req.params.id;
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync("./uploads/avatar/" + req.body.avatar);
      } catch (error) {
        console.log(error);
      }
    } else {
      new_image = req.body.avatar;
    }
    const newHero = req.body;
    newHero.avatar = new_image;
    try {
      await Hero.findByIdAndUpdate(id, newHero);
      res.status(200).json({ message: "Update Successfully!!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async deleteHero(req, res) {
    const id = req.params.id;
    try {
      const result = await Hero.findByIdAndDelete(id);
      if (result.avatar != "") {
        try {
          fs.unlinkSync("./uploads/avatar/" + result.avatar);
        } catch (error) {
          console.log(error);
        }
      }
      res.status(200).json({ message: "Delete Successfully!!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};
