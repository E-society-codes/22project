const express = require("express")
const mongoose = require("mongoose")
const complaintController = require("./controller/complaintController")
const eventController = require("./controller/eventController")
const memberController = require("./controller/memberController")
const societyController = require("./controller/societyController")
const maintenanceController = require("./controller/maintenanceController")
const roleController = require("./controller/roleController")
const houseController = require("./controller/houseController")
const userController = require("./controller/userController")
const placeController = require("./controller/placeController")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

//place Api
app.post("/place",placeController.addPlace)
app.put("/place",placeController.updatePlace)
app.get("/place",placeController.getAllPlaces)
app.delete("/place",placeController.deletePlace)

//user Api
app.post("/user",userController.addUser)
app.put("/user",userController.updateUser)
app.get("/user",userController.getAllUsers)
app.delete("/user",userController.deleteUser)

//house api
app.get("/house",houseController.getAllHouses)
app.post("/house", houseController.addHouse)
app.put("/house",houseController.updateHouse)
app.delete("/house",houseController.deletehouse)

//role api
app.post("/role",roleController.addRole)
app.put("/role",roleController.updateRole)
app.get("/role",roleController.getAllRoles)
app.delete("/role",roleController.deleteRole)

//maintenance Api
app.post("/maintenance",maintenanceController.addMaintenance)
app.put("/maintenance",maintenanceController.updateMaintenance)
app.get("/maintenance",maintenanceController.getAllMaintenance)
app.delete("/maintenance",maintenanceController.deleteMaintenance)

//event Api
app.post("/event",eventController.addEvent)
app.put("/event",eventController.updateEvent)
app.get("/event",eventController.getAllEvents)
app.delete("/event",eventController.deleteEvent)

//Complain Api
app.post("/complaint",complaintController.addcomplaint)
app.put("/complaint",complaintController.updatecomplaint)
app.get("/complaint",complaintController.getAllcomplaint)
app.delete("/complaint",complaintController.deletecomplaint)

//Member Api
app.post("/member",memberController.addMember)
app.put("/member",memberController.updateMember)
app.get("/member",memberController.getAllMembers)
app.delete("/member",memberController.deleteMember)

//society Api
app.post("/society",societyController.addSociety)
app.put("/society",societyController.updateSociety)
app.get("/society",societyController.getAllSociety)
app.delete("/society",societyController.deleteSociety)






mongoose.connect("mongodb://localhost/Esociety", function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("db Connected")
    }
})


app.listen(9999, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("Server Started 9999....")
    }
})

// user : 62fd1284ee7f844716a2cbf1
//house : 62fce409fd9ac6e43d94e176