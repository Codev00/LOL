const mongoose = require("mongoose");

const skinSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  hero: {
    type: mongoose.Types.ObjectId,
    ref: "hero",
  },
});
module.exports = mongoose.model("skin", skinSchema);
