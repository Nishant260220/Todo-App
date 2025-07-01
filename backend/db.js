/*
Todo{
title: string
description: string
copleted: boolean
}
*/

const mongoose = require("mongoose");
// const { Boolean } = require("zod");

mongoose.connect("mongodb+srv://NishantTyagi:Nishant%4026@cluster0.aavdap5.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo: todo
}