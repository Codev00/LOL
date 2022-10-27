const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const router = require("./routes/router");

const app = express();
const PORT = config.port.uri;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

//database connected
const data = mongoose
  .connect(config.dba.url, {
    dbName: "myApp",
  })
  .then(() => console.log("Connected to the Database!!!"))
  .catch((err) => console.log(err));

// router
app.use("/api/", router);
//   start server
app.listen(PORT, () => console.log(`Server is running at host ${PORT}`));
