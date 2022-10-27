const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  passvie: String,
  Q: String,
  W: String,
  E: String,
  R: String,
});
module.exports = mongoose.model("skill", skillSchema);
