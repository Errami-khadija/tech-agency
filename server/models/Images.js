const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
       myFile: String
});

const ImageModel = mongoose.model("Images", ImageSchema);
module.exports= ImageModel