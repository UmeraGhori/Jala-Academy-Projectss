const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECT_URI, {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`)
});