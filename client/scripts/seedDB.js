const mongoose = require("mongoose");
const Content = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/resourceCenter"
);

const ajaxSeed = [
  {
    title: "Ajax Seed",
    link: "testlink",
    category:"ajax",
    summary: "test summary"
  }
];

Content
  .remove({})
  .then(() => db.Book.collection.insertMany(ajaxSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
