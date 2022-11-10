const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  level: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  avatar: {
    type: String,
  },
  play: {
    type: String,
  },
  skins: [
    {
      type: mongoose.Types.ObjectId,
      ref: "skin",
    },
  ],
});
module.exports = mongoose.model("Hero", heroSchema);
