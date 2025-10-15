const { get } = require("mongoose");
const addvehicleModel = require("../models/AddVehicleModel");


const AddVehicle=async(req,res)=>{
    const {vehiclenumber,vehicleownername,flatno,rcnumber,vehicleownercontact,alternatecontact,
            email,address,flatownername,flatownercontact,validdate,vehicletype} = req.body;
        try {
            const addData = await addvehicleModel.create({
                vehicleNumber:vehiclenumber,
                vehicleType:vehicletype,
                vehicleOwnerName:vehicleownername,
                flatNo:flatno,
                rcnumber:rcnumber,
                vehicleOwnerContact:vehicleownercontact,
                alternateContact:alternatecontact,
                email:email,
                address:address,
                flateOwnerName:flatownername,
                flatOwnerContact:flatownercontact,
                validDate:validdate
            })
            res.status(200).send({message:"Vehicle successful added"});
        } catch (error) {
            res.status(500).send({message:"error"});
        }
    }


const dataDisplay=async(req, res)=>{
    try {
        const getData = await addvehicleModel.find();
        res.status(201).send(getData);
    } catch (error) {
        res.status(501).send({message:"Server Error"});
    }       
}

const Search=async(req, res)=>{
    const {search} = req.body;  
        try{
             const regex = new RegExp(search + "$", "i");
            const findData = await addvehicleModel.findOne({vehicleNumber: { $regex: regex }})
            if(findData){
                return res.status(201).send(findData);                          
            }else{
            return res.status(200).send({message:"No Data"});
            }
        } catch (error) {
            return res.status(501).send({message:"error"});   
        }
}

const Delete=async(req,res)=>{
     const {id} = req.query;
     const deleteData = await addvehicleModel.findByIdAndDelete(id);
     res.status(201).send({message:"Data deleted"});
}


module.exports={
    AddVehicle,
    dataDisplay,
    Search,
    Delete
}