"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function AddTodo() {
  const [todoData, setTodoData] = useState({
    title: "",
    status: "",
  });
  const handleCahnge = (ev) => {
    if (ev.target.name == "todoTitle") {
      setTodoData({ ...todoData, title: ev.target.value });
    } else if (ev.target.name == "todoStatus") {
      setTodoData({ ...todoData, status: ev.target.value });
    }
  };
  const handelSubmit = async (ev) => {
    ev.preventDefault();
    await fetch(`http://localhost:3000/api/todo`, {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect("/todo");
  };
  return (
    <>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Todo Title</label>
          <input
            type="text"
            name="todoTitle"
            value={todoData.title}
            onChange={(e) => handleCahnge(e)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Todo Status</label>
          <input
            type="text"
            name="todoStatus"
            value={todoData.status}
            onChange={(e) => handleCahnge(e)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
