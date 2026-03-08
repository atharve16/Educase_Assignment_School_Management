const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const schoolRoutes = require("./routes/schoolRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/schools", schoolRoutes);

app.use(errorHandler);

module.exports = app;