"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { headerItems } from "../Array/HeaderArray";

const Header = () => {
  const router = useRouter();
  const handleGoLogin = () => {
    router.push("/login");
  };

  const path = usePathname();
  // console.log("Path: ", path);
  return (
    <div className=" py-2 px-4  ">
      <div className="bg-blue-600 flex items-center justify-between px-10 py-4 rounded-md">
        <h1 className="font-bold text-xl">NEXT JS</h1>

        <div className="flex items-center gap-x-4">
          {headerItems.map((data, idx) => (
            <Link
              key={idx}
              href={data?.path}
              className={path == data.path && "text-green-400 font-bold"}
            >
              {data.name}
            </Link>
          ))}
          <button onClick={() => handleGoLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
