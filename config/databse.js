const mongoose = require('mongoose');
require("dotenv").config(); //takes all the data from .env file to the process object to use 

//fucntion to create a connection bw node.js and Db
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB is connected."))
    .catch((error) => {
        console.log("Db connection failed.");
        console.log(error);
        //stop the node app with a failure code-1
        process.exit(1);
    });
};

//funtion is exported to be accessible in other files
module.exports = dbConnect;