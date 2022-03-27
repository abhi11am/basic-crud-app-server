require("dotenv").config({ path: "./config/.env" });

const cors = require("cors");
const express = require("express");
const db = require("./models");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("node js app");
});

// users routes
app.use("/users", usersRoutes);

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});
