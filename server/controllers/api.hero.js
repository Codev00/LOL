const Hero = require("../models/hero");
const fs = require("fs");
const Sv = require("../services/service");

module.exports = class heroAPI {
  static async getHero(req, res) {
    const id = req.params.id;
    try {
      const hero = await Hero.findById(id).populate("skins");
      res.status(200).json(hero);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async getAllHero(req, res) {
    let doc = [];
    try {
      const service = new Sv();
      const { name } = req.query;
      if (name) {
        doc = await service.findByName(name);
      } else {
        doc = await service.find({});
      }
      res.status(200).json(doc);
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
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (error) {
        console.log(error);
      }
    } else {
      new_image = req.body.old_image;
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
          fs.unlinkSync("./uploads/" + result.avatar);
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
