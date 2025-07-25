// import the model
const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async (req, res) => {
    try {
        // extract title and description from the request body
        const { title, description } = req.body;

        // create a new Todo object and insert into the DB
        const response = await Todo.create({ title, description });

        // send a json response with a success flag
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry created successfully'
        });
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
