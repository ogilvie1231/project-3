const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gitSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: Date, default: Date.now }
});

const GitModel = mongoose.model("GitModel", gitSchema);

module.exports = GitModel;