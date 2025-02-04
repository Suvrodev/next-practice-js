import React from "react";
import Header from "../components/Header/Header";

const layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="px-4">{children}</div>
    </div>
  );
};

export default layout;
