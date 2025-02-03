"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const handleGoLogin = () => {
    router.push("/login");
  };
  return (
    <div className=" py-2 px-4  ">
      <div className="bg-blue-600 flex items-center justify-between px-10 py-4 rounded-md">
        <h1 className="font-bold text-xl">NEXT JS</h1>

        <div className="flex items-center gap-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard/profile"}>Profile</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/counter"}>Counter</Link>

          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <button onClick={() => handleGoLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
