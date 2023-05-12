const port = 8000
const express = require("express")
const axios = require("axios")
const app = express()
const cors = require("cors")
app.use(cors())
require("dotenv").config()

// rapid API

app.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: "https://videogames-news2.p.rapidapi.com/videogames_news/search_news",
    params: { query: "Blizzard" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
    },
  }

  axios
    .request(options)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send("An error occurred.")
    })
})

app.listen(port, () => console.log("Server Hear at port " + port))
