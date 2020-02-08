const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const htmlSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const HtmlModel = mongoose.model("HtmlModel", htmlSchema);

module.exports = HtmlModel;