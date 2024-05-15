import mongoose from "mongoose";

const db = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO)
        console.log('Database Connected')
    }
    catch(error){
        console.log(`error connection : ${error.message}`)
        process.exit()
    }
}

export default db