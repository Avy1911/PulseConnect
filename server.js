import express from 'express'
import authRoute from './routes/auth.routes.js'
import userRoute from './routes/user.routes.js'
import postRoute from './routes/post.routes.js'
import dotenv from 'dotenv'
import db from './database/db.js'
import cookieParser from 'cookie-parser'
import {v2 as cloudinary} from 'cloudinary'
import notificationRoute from './routes/notification.routes.js'
const app = express()
const port = process.env.PORT || 5000
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use('/api/auth' , authRoute)
app.use('/api/user' , userRoute)
app.use('/api/auth' , postRoute)
app.use('/api/notification' , notificationRoute)
//console.log(process.env.MONGO)

app.listen(port, () => {
    console.log(`server runs on ${port}`)
    db()
})