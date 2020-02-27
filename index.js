const express = require("express")
const socket = require("socket.io")
const app = express() 

const server = app.listen(3001, () => {
    console.log("listening 3001")
})

const io = socket(server)

io.on("connection", (socket) => {
})

