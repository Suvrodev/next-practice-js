import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-red-500 flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl">Not Found Page</h1>
      <Link href={"/"}>
        <button className="btn btn-warning text-white mt-4">Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
