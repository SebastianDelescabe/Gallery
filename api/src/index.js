const express = require("express");
const axios = require("axios");
const redis = require("redis");

const app = express();

app.get("/home", async (req, res) => {

  const response = await axios.get("https://rickandmortyapi.com/api/character");

  res.json(response.data)
})

app.listen(3000);
console.log('OK')
