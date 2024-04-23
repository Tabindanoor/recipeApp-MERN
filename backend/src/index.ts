import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test",async(req,res)=>{
    res.json({message:"Hello world"})
})

app.listen(8000,()=>{
    console.log("listening at port 8000...")
})