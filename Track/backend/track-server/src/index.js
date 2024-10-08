require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clusterakademy.yptu6je.mongodb.net/trackDB?retryWrites=true&w=majority&appName=ClusterAKADEMY`;
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied. Make sure you watch the video on setting up Mongo DB!`
  );
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
