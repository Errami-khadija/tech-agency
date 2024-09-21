const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
      },
       description: {
        type: String,
        default: false
      }
})

const serviceModel = mongoose.model("services",ServiceSchema)
module.exports= serviceModel