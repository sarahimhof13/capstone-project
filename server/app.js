// import environment variables
require("dotenv").config();

const mongoose = require("mongoose");

// express app
const express = require("express");
const app = express();

//middleware
app.use(express.json());

// import planetRoute
const planetRoute = require("./routes/planetRoute");

//routes
app.use("/planets", planetRoute);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
