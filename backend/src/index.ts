import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoute from "./routes/MyUserRoute"
import myRestaurantRoute from "./routes/MyRestaurantRoute"
import { Request, Response } from "express"
import { v2 as cloudinary } from "cloudinary";
import restaurantRoute from "./routes/RestaurantRoute"

mongoose
        .connect(process.env.DATABASE_STRING as string)
        .then(()=>{console.log("Connected to the database!")
})


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });



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
app.use("/api/my/restaurant",myRestaurantRoute)
app.use("/api/restaurant", restaurantRoute)


app.listen(7000,()=>{
    console.log("listening at port 7000...")
})