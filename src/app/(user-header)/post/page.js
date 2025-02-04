import React from "react";

const PostPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?limit=10",
    { cache: "no-store" }
  );
  const posts = await res.json();
  //   console.log("Post: ", posts);
  return (
    <div>
      <h1 className="text-xl font-bold">Post Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {posts?.map((data, idx) => (
          <div
            key={idx}
            className="max-w-sm bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800">{data?.title}</h2>
            <p className="text-gray-600 mt-2">{data?.body}</p>
            <div className="mt-4 flex justify-between text-gray-500 text-sm">
              <span>User ID: {data?.userId}</span>
              <span>Post ID: {data?.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
