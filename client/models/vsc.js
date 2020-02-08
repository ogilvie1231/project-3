const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vscSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const VscModel = mongoose.model("VscModel", vscSchema);

module.exports = VscModel;