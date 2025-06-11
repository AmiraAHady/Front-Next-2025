"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function AddPost() {
  const [postTitle, setPostTitle] = useState("");
  const addNewPost = async () => {
    await fetch(`http://localhost:3000/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title: postTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect('/postList')
  };
  return (
    <div class="mb-3">
      <label htmlFor="postTitle" class="form-label">
        Post Title
      </label>
      <input
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        class="form-control"
        id="postTitle"
        aria-describedby="postTitle"
      />
      <button className="btn btn-primary" onClick={() => addNewPost()}>
        Add Post
      </button>
    </div>
  );
}
