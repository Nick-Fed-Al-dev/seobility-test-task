const express = require("express")
const cors = require("cors")

const server = express()

server.use(cors({
  origin: "*"
}))

server.use(express.json())

server.post("/api", (req, res) => {
  res.send("success")
})

server.listen(3001, () => {
  console.log("started")
})