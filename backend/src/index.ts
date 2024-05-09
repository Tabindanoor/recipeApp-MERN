import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoute from "./routes/MyUserRoute"
import { Request, Response } from "express"

mongoose
        .connect(process.env.DATABASE_STRING as string)
        .then(()=>{console.log("Connected to the database!")
})

const app = express()
app.use(express.json())
app.use(cors())

// app.get("/test",async(req,res)=>{
//     res.json({message:"Hello world"})
// })


app.get("/health", async (req:Request, res:Response)=>{
    res.send({message:"Health OK!"})
})

app.use("/api/my/user",myUserRoute)

app.listen(7000,()=>{
    console.log("listening at port 7000...")
})