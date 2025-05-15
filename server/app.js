const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");
const deptRoutes = require("./routes/deptRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", itemRoutes);
app.use("/api", deptRoutes);

module.exports = app;
