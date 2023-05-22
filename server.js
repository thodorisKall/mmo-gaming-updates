const port = process.env.PORT || 8000;
const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("success");
});

// rapid API

app.get("/video-games", (req, res) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/latestnews",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data.slice(0, 14));
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
});

app.use(express.static(path.join(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(port, () => console.log("Server Listening at port " + port));

