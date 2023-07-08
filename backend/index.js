const express = require( "express");

require("dotenv").config();

console.log(process.env.PORT)

require("./db/config");

const mongoose = require("mongoose");

const cors = require("cors");
const employee = require("./db/Employee");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome I am Live")
});

app.post("/addEmployee", async (req, resp) => {
    let emp = new employee(req.body) //transfering to mongodb
    console.log(req.body);
    let result = await emp.save(); //save is method in mongoose for promise
    resp.send(result);
});

app.get("/employees", async (req, res) => {
    const employees = await employee.find();
    if(employees.length>0){
        res.send(employees)
    } else{
        res.send({Result: "No Employee Found"})
    }
})


app.delete("/employee/:id", async (req, res) => {
    let result = await employee.deleteOne({_id: req.params.id})
    res.send(result)
})

app.get("/employee/:id", async (req, res) => {
    let result = await employee.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    } else{
        res.send({Result: "No Record Found"});
    }
})

app.put("/employee/:id", async (req, res) => {
    let result = await employee.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    res.send(result);
})

app.get("/search/:key", async (req, res) => {
    let result = await employee.find({
        "$or": [
            {
                FirstName: {$regex: req.params.key}
            },
            {
                Email: {$regex: req.params.key}
            },
            {
                Address: {$regex: req.params.key}
            }
        ]
    });
    res.send(result);
})


const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on Port" + port);
});
