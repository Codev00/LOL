const Skin = require("../models/skin");
const fs = require("fs");
const Sv = require("../services/service");

module.exports = class skinAPI {
  static async getSkin(req, res) {
    const id = req.params.id;
    try {
      const skin = await Skin.findById(id).populate("hero");
      res.status(200).json(skin);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async getAllSkin(req, res) {
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
  static async createSkin(req, res) {
    const skin = req.body;
    const imagename = req.file.filename;
    skin.avatar = imagename;
    try {
      await Skin.create(skin);
      res.status(200).json({ message: "Create Successfully!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async updateSkin(req, res) {
    const id = req.params.id;
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync("./skins/" + req.body.old_image);
      } catch (error) {
        console.log(error);
      }
    } else {
      new_image = req.body.old_image;
    }
    const newskin = req.body;
    newskin.avatar = new_image;
    try {
      await Skin.findByIdAndUpdate(id, newskin);
      res.status(200).json({ message: "Update Successfully!!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async deleteSkin(req, res) {
    const id = req.params.id;
    try {
      const result = await Skin.findByIdAndDelete(id);
      if (result.avatar != "") {
        try {
          fs.unlinkSync("./skins/" + result.avatar);
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
