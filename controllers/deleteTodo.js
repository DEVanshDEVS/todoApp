// import the model
const Todo = require("../models/Todo");

// define delete route handler
exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params; //new methhod to fetch id from the req
        const todo =  await Todo.findByIdAndDelete(id);//simply finds the data by id and deletes
        res.status(200)
        .json({
            success:true,
            data:todo, 
            message:"Todo Deleted"
        })
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
};
