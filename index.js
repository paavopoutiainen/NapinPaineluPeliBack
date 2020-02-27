const express = require("express")
const socket = require("socket.io")
const app = express() 

const server = app.listen(3001, () => {
    console.log("listening 3001")
})

let counter = 0

const checkPoints = () => {
    if(counter % 500 === 0){
        return 250
    } else if (counter % 100 === 0){
        return 40
    } else if(counter % 10 === 0){
        return 5
    } else return 0
}

const io = socket(server)

io.on("connection", (socket) => {
    socket.on("click", () => {
        counter++
        let points = checkPoints()
        const nextPointGivingClick = Math.ceil((counter +1) / 10) * 10
        const clicksLeftBeforePoints = nextPointGivingClick - counter
        console.log(counter)
        socket.emit("clickResponse", { clicksLeftBeforePoints: clicksLeftBeforePoints, pointsIncreased: points})
    })
})

