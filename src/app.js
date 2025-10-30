require('dotenv').config()
const express = require('express')
const app = express()

app.use("/login",(req,res) => {
  res.send("Please login")
})
app.listen( process.env.PORT, () => {
  console.log("Server is successfully running")
})