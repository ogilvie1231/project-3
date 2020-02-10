const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 
///
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/resourceCenter";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, }, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection success")
    }
});

///

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/resourceCenter");

const routes = require("./routes/api/index")
app.use("/", routes);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
