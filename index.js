const express = require("express");

const app = express();

//load config from env file
require("dotenv").config();
//either the port number will be fetched
//from .env or the default port number is 4000
const PORT = process.env.PORT || 4000;

//middleware to parse json req body
app.use(express.json());

//import routes from TODO API
const todoRoutes = require("./routes/todos");
//Mount the todo API routes
app.use("/api/v1", todoRoutes);


//start the server
app.listen(PORT, () =>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
//import
const dbConnect = require("./config/databse");
//call
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send("<h1>This is HOMEPAGE baby</h1>");
});
 