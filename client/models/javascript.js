const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javascriptSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const JavascriptSchema = mongoose.model("JavascriptSchema", javascriptSchema);

module.exports = JavascriptSchema;