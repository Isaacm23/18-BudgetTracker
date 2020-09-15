const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");


const PORT = process.env.PORT || 3000;
// mongodb+srv//budget:budget1@cluster0.8dlel.mongodb.net/budget?retryWrites=true&w=majority'




const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "https://budgettracck.herokuapp.com/", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

