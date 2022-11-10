const Hero = require("../models/hero");
const Skins = require("../models/skin");
const User = require("../models/user");

class Service {
  async find(filter) {
    const cursor = await Hero.find(filter).sort({ name: 1 });
    return await cursor;
  }
  async finds(filter) {
    const cursor = await Skins.find(filter);
    return await cursor;
  }
  async findx(filter) {
    const cursor = await User.find(filter);
    return await cursor;
  }
  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $option: "i" },
    }).sort({ name: 1 });
  }
}

module.exports = Service;
