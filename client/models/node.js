const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const NodeModel = mongoose.model("NodeModel", nodeSchema);

module.exports = NodeModel;