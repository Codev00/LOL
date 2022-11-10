const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hero: [
    {
      type: mongoose.Types.ObjectId,
      ref: "hero",
    },
  ],
});
module.exports = mongoose.model("user", userSchema);
