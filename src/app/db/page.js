import { db, posts } from "@/lib/db";

export default async function Page() {
  const allPosts = await db.select().from(posts); // ORM query

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
