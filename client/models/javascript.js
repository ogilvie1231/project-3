const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const javascriptSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: Date, default: Date.now }
});

const JavascriptSchema = mongoose.model("JavascriptSchema", javascriptSchema);

module.exports = JavascriptSchema;