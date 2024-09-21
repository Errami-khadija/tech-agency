const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    clientName:{
        type: String,
    },
    subject:{
        type: String,
    },
    email:{
        type: String,
    },
    message:{
        type: String,
    }
})

const messageModel = mongoose.model("messages",MessageSchema)
module.exports= messageModel