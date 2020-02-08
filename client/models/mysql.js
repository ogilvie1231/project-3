const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mysqlSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: Date, default: Date.now }
});

const MysqlModel = mongoose.model("MysqlModel", mysqlSchema);

module.exports = MysqlModel;