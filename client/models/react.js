const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const ReactModel = mongoose.model("ReactModel", reactSchema);

module.exports = ReactModel;