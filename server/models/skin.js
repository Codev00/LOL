const mongoose = require("mongoose");

const skinSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("skin", skinSchema);
