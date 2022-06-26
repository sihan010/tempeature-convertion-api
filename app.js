// imports
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

// routes
import health from "./api/routes/health.js";
import temperature from "./api/routes/temperature.js";

// middlewares
app.use(bodyParser.json()); // parse json in request body
app.use(morgan("tiny")); // use minimal logging

// use routes
app.use("/api/v1/health", health);
app.use("/api/v1/temperature", temperature);

export default app;
