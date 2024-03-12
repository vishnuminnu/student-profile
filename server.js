import express from "express"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import cors from "cors"
import morgan from "morgan"
import multer from "multer"
import path from "path"
const app = express()
const upload = multer({dest:'uploads/'})
connectDB()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"./client/build")))
//routes
app.use("/api/v1/auth",authRoutes);


app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

app.listen(8080,()=>{
    console.log("server running")
})
