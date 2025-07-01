import { useState } from "react";

function CreateTodo({onAdd}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todos", {
      method: "Post",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async function (res) {
        const json = await res.json();
        alert("Todo added successfully");
        setTitle("");
        setDescription("");
        onAdd();
      })
      .catch((err) => {
        alert("Error adding todo");
      });
  };
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a todo
      </button>
    </div>
  );
}

export default CreateTodo;
