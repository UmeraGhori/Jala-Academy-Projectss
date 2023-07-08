const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    MobileNumber: Number,
    DateOfBirth: Date,
    Gender: String,
    Address: String,
    Country: String,
    City: String,
    Skills: String
});

module.exports = mongoose.model("employees", EmployeeSchema);


// const mongoose = require("mongoose");

// const EmployeeSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     category: String,
//     userId: String,
//     company: String
// });

// module.exports = mongoose.model("employees", EmployeeSchema);