import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", async (req, res) => {
    res.json({message:"test message"})
})

app.listen(7000,()=>{
    console.log("server started at localhost:7000");
})