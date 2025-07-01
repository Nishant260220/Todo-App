function Todos({ todos, onUpdate}) {
    
  const markCompleted = async (id) => {
    const res = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    alert(json.msg);
    onUpdate();
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button onClick={() => markCompleted(todo._id)}>
              {todo.completed == true ? "completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
