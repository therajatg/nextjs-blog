import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function posts() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/posts`)
      .then((res) => res.json())
      .then((data) => setAllPosts(data));
  }, []);

  console.log(allPosts);
  return (
    <>
      <h1>POSTS</h1>
      {allPosts.map((each) => (
        <div>
          <h3>{each.title}</h3>
          <p>{each.body}</p>
          <button>
            <Link href={`posts/${each.id}`}>See Post Detail</Link>
          </button>
        </div>
      ))}
    </>
  );
}

posts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
