const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to Database");
    })
    .catch((error) => {
      console.log("Database connection failed. exiting now....");
      console.log(error);
      process.exit(1);
    });
};
