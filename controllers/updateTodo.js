// import the model
const Todo = require("../models/Todo");

// define update route handler
exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params; //new methhod to fetch id from the req
        const {title, description} = req.body;
        const todo =  await Todo.findByIdAndUpdate(
            id,  // ✅ fixed: pass id directly, not {_id: id}
            {title, description, updatedAt: Date.now()}
        )
        res.status(200)
        .json({
            success:true,
            data:todo,  // ✅ fixed: changed 'todos' to 'todo'
            message:"Updated successfully"
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
