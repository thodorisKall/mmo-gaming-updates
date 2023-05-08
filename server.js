const port = 8000
const express = require("express")
const axios = require("axios")
const app = express()
const cors = require("cors")
app.use(cors())
require("dotenv").config()

// rapid API

const options = {
  method: "GET",
  url: "https://videogames-news2.p.rapidapi.com/videogames_news/search_news",
  params: { query: "Blizzard" },
  headers: {
    "X-RapidAPI-Key": "3a81af6b6cmshc8eb6a158aa8ac4p15cb04jsna09b248bc462",
    "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
  },
}

try {
  const response = await axios.request(options)
  console.log(response.data)
} catch (error) {
  console.error(error)
}
