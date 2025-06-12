import { dbConnection } from "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";
import React from "react";

export default function AddTodo() {
  async function addTodo(formData) {
    "use server";
    const title = formData.get("todoTitle");
    const status = formData.get("todoStatus");
    // dbConnection()
    await todoModel.create({ title, status });
  }
  return (
    <>
      <form action={addTodo}>
        <div className="mb-3">
          <label className="form-label">Todo Title</label>
          <input type="text" name="todoTitle" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Todo Status</label>
          <input type="text" name="todoStatus" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
