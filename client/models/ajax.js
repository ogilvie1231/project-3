const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ajaxSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const AjaxModel = mongoose.model("AjaxModel", ajaxSchema);

module.exports = AjaxModel;