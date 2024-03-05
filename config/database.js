import mongoose from 'mongoose'

let connected = false
const connectDB = async() => {
    mongoose.set('strictQuery', true) //field that are specified in our schema will be saved in database

    // if database is already connected don't connect again
    if (connected) {
        console.log('MongoDB is already connected')
        return
    }

    // connect to mongo database
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log('Connected to MongoDB...')

    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}

export default connectDB