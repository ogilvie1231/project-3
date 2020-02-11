const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sequelizeSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: String, required: true }
});

const SequelizeModel = mongoose.model("SequelizeModel", sequelizeSchema);

module.exports = SequelizeModel;