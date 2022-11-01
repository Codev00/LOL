const Hero = require("../models/hero");

class Service {
  async find(filter) {
    const cursor = await Hero.find(filter);
    return await cursor;
  }
  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $option: "i" },
    });
  }
}

module.exports = Service;
