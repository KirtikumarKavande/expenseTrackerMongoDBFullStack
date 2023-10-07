const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authSchema = new Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "signupuser",
  },
});

module.exports = mongoose.model("expense", authSchema);
