import React from "react";

export default async function TodoList() {
  let res = await fetch("http://localhost:3000/api/todo");
  let { data: allTodos } = await res.json();
  return (
    <>
      {allTodos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.status}</p>
        </div>
      ))}
    </>
  );
}
