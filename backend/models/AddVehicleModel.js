const mongoose = require("mongoose");

const AddVehiclesSchema = new mongoose.Schema({
    vehicleNumber:String,
    vehicleType:String,
    vehicleOwnerName:String,
    flatNo:String,
    rcnumber:String,
    vehicleOwnerContact:Number,
    alternateContact:Number,
    email:String,
    address:String,
    flateOwnerName:String,
    flatOwnerContact:Number,
    validDate:String
})

module.exports=mongoose.model("addVehicles",AddVehiclesSchema);