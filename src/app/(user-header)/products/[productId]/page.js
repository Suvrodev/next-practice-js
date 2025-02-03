import React from "react";

const DynamicProductPage = async ({ params, searchParams }) => {
  const { category } = await searchParams;
  const { productId } = await params;
  console.log("Product page: ", productId);
  console.log("Search Params: ", category);
  console.log("All search params: ", await searchParams);
  return (
    <div className="h-screen">
      <h1>Dynamic Product: {productId} </h1>
      <p> Category: {category} </p>
    </div>
  );
};

export default DynamicProductPage;
