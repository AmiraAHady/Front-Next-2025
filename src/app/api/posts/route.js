import { posts } from "./postsData";

export async function GET() {
  return new Response(JSON.stringify({ data: posts }), { status: 200 });
}

export async function POST(request) {
  const post = await request.json();
  let newPost = {
    title: post.title,
    id: posts.length + 1,
  };
  posts.push(newPost);

  return new Response(JSON.stringify(newPost));
}

// uuid
