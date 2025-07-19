// import the model
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async (req, res) => {
    try {
        //fetch all todos items from dbms
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched"
        })
    } 
    catch (err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,  // corrected: err.messages -> err.message
            message:"Server Error",
        })
    }
};


// define route handler
exports.getTodoById = async (req, res) => {
    try {
        //extract Todo item by id
        const id = req.params.id;
        const todo = await Todo.findById(id);  // corrected: findById({_id:id}) -> findById(id)
        
        //data for given id not found
        if(!todo){  // corrected: !tood -> !todo
            return res.status(404).json({
                success:false,
                message:"No Data Found with the given Id",
            })
        }
        
        //data for given id is found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    } 
    catch (err) {
        //remains same most of the time
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,  // corrected: err.messages -> err.message
            message:"Server Error",
        })
    }
};
 