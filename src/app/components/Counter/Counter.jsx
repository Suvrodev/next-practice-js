"use client";
import React, { useState } from "react";

const Counter = () => {
  const [countValue, setCountValue] = useState(0);
  console.log("Count Value: ", countValue);
  console.log("Hello From Counter");
  return (
    <div>
      <h1 className="bg-white text-black text-center p-4 my-2 rounded-md font-bold">
        Simple Counter
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
        <button
          className="btn btn-error text-white"
          onClick={() => setCountValue(countValue - 1)}
        >
          -
        </button>
        <button className="btn btn-warning text-white">{countValue}</button>
        <button
          className="btn btn-primary text-white"
          onClick={() => setCountValue(countValue + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
