import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute  from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"




dotenv.config()


const app = express()
const port = process.env.PORT || 8050
const corsOptions ={
    origin:true
}

app.get('/',(req,res)=>{
    res.send('Api is work')
})
//database

mongoose.set('strictQuery',false)
const connectDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology : true,
        })
        console.log('MongoDB Is Connected');

    }catch(err){
        console.log('MongoDB Is Connection fail');


    }
}

//middleware

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/auth',authRoute )
app.use('/auth/user',userRoute )
app.use('/auth/doctor',doctorRoute )
app.use('/auth/review',reviewRoute )





app.listen(port,()=>{
    connectDB();
    console.log(`Server is running`);
})