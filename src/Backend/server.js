const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRouters = require("./Routes/userRoutes");
const userRouters2 = require("./Routes/userRoutes2");
const { notFound, errorHandler } = require("./middleware/errormiddleware");
dotenv.config();
connectDB();

const app = express();
var cors = require("cors");
app.use(cors());

// we have to tell the backend that it has to accept the json data from the frontend

app.use(express.json());

app.use("/api/user", userRouters);
// app.use("/profile", userRouters2);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(5000, console.log(`Port is running on ${port}`.yellow.bold));
