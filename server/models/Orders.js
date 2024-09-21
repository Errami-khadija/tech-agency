const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    service:{
        type: String,
    },

    username:{
        type: String,
    },
    phone:{
        type: String,
    },
    email:{
        type: String,
    },
    subject:{
        type: String,
    },
    specifications:{
        type: String,
    },
    date: { type: Date, default: Date.now },
    price:{
        type: Number,
        default:0
    },
    duration:{
        type:String,
        default:0
    },
    statut:{
        type:String,
        default:"waiting"
    }

})

const orderModel = mongoose.model("orders",OrderSchema)
module.exports= orderModel