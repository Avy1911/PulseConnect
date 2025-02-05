import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    followers: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        default: []
    },
    following: [
        {
            type: mongoose.Schema.Types.ObjectID,
            default: [],
            ref: 'User',
        }
    ],
    profileImg: {
        type: String,
        default: "",
    },
    coverImg: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },
    link: {
        type: String,
        default: "",
    }
}, { timestamps: true })

const User = mongoose.model('User' , userSchema)
export default User