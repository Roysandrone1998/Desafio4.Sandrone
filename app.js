import express from "express";

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(port,() => {
    console.log("Server listening in port: " + port)
})