const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const firebaseSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  summary: { type: Date, default: Date.now }
});

const FirebaseModel = mongoose.model("FirebaseModel", firebaseSchema);

module.exports = FirebaseModel;