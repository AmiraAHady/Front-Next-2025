import React from "react";

export default async function PostList() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const { data: postsData } = await res.json();
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {postsData.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
