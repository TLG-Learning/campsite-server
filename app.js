require("dotenv").load();

const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const { stringify } = require("flatted");

app.use(cors());

let config = {
  headers: {
    apiKey: process.env.API_KEY,
  },
};

app.get("/api/campsites", async function (req, res) {
  const results = await axios.get(
    "https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&state=CO&lastupdated=10-01-2018",
    config
  );

  res.send(stringify(results));
});

app.listen(process.env.PORT || 3000);
