const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jquerySchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const JqueryModel = mongoose.model("JqueryModel", jquerySchema);

module.exports = JqueryModel;