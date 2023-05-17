const port = 8000
const express = require("express")
const axios = require("axios")
const app = express()
const cors = require("cors")
app.use(cors())
require("dotenv").config()

// rapid API

app.get("/video-games", (req, res) => {
  const axios = require("axios")

  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/latestnews",
    headers: {
      "X-RapidAPI-Key": "3a81af6b6cmshc8eb6a158aa8ac4p15cb04jsna09b248bc462",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data.slice(0, 14))
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error.message)
    })
})

app.listen(port, () => console.log("Server Listening at port " + port))
