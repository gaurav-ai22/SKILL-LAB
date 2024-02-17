const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 9089;

app.use(express.json());
app.use(cookieParser())

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log(err, "something went wrong");
  });

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
