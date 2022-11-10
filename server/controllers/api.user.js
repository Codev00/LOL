const Sv = require("../services/service");
const Hero = require("../models/hero");
const User = require("../models/user");
module.exports = class userAPI {
  static async getUser(req, res) {
    const id = req.params.id;
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async getAllUser(req, res) {
    let doc = [];
    try {
      const service = new Sv();
      const { name } = req.query;
      if (name) {
        doc = await service.findByName(name);
      } else {
        doc = await service.findx({});
      }
      res.status(200).json(doc);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async createUser(req, res) {
    const user = req.body;
    try {
      await User.findOneAndUpdate(user);
      res.status(200).json({ message: "Create Successfully!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async updateUser(req, res) {
    const id = req.params.id;
    const newUser = req.body;

    try {
      await user.findByIdAndUpdate(id, newUser);
      res.status(200).json({ message: "Update Successfully!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async deleteUser(req, res) {
    const id = req.params.id;
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "Delete Successfully!!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};
