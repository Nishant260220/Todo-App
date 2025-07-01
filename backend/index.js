const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./db.js");
const app = express();

app.use(cors({
  origin: "http://localhost:5173/todos"
}));
app.use(express.json());

app.post("/todos", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent wrong input"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({})

    res.json({
        todos
    })
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent wrong input"
        })
    }

   try {
        await todo.updateOne(
            { _id: updatePayload.id },
            { $set: { completed: true } } 
        );
        res.json({
            msg: "Todo marked as completed"
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "Something went wrong in DB update" });
    }
})

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
