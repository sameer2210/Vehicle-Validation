const express=require("express");
const route = express.Router();

const vehicleController=require("../controllers/VehiclesController");

route.post("/addvehicle",vehicleController.AddVehicle);
route.get("/datadisplay",vehicleController.dataDisplay);
route.post("/search",vehicleController.Search);
route.get("/delete",vehicleController.Delete);


module.exports=route;