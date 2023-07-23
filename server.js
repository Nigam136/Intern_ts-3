const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const sequelize = require("./config/db");
const User = require("./model/User");
var cors = require("cors");
const circularJSON = require("circular-json");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["POST"],
  })
);

app.use("/auth", authRoutes);

connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Authentication successfull with the database...");

    await User.sync({ alter: true });
    console.log("syncing successfull with the database...");
  } catch (err) {
    console.log("unsuccesfull connection, check database", err);
  }
};
connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
