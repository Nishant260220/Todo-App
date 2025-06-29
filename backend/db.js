/*
Todo{
title: string
description: string
copleted: boolean
}
*/

const mongooge = require("mongoose");
const { boolean } = require("zod");

mongooge.connect("mongodb+srv://NishantTyagi:Nishant%4026@cluster0.aavdap5.mongodb.net/")
const todoSchema = mongooge.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongooge.model("todos", todoSchema)

module.exports({
    todo: todo
})