const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const config = require("./config");
const cors = require('cors');
app.use(cors(config.cors));

module.exports = app;