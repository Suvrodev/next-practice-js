import ProductCard from "@/app/components/ProductCard/ProductCard";
import React from "react";

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log("Data: ", data);

  return (
    <div className="h-screen">
      <h1 className="text-center font-bold my-4">Product Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
