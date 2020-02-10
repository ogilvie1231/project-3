const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bootstrapSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const BootstrapModel = mongoose.model("BootstrapModel", bootstrapSchema);

module.exports = BootstrapModel;