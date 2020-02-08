const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bootstrapSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: Date, default: Date.now }
});

const BootstrapModel = mongoose.model("BootstrapModel", bootstrapSchema);

module.exports = BootstrapModel;