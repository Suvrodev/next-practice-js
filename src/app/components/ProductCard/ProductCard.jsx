import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-gradient-to-br from-purple-600 to-purple-800 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-white transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50"
    >
      <div className="overflow-hidden rounded-xl">
        {product.image && (
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
            className="rounded-xl object-cover transition-transform duration-300 hover:scale-110"
          />
        )}
      </div>
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="mt-2 opacity-90">Brand: {product.brand}</p>
      <p className="opacity-90">Model: {product.model}</p>
      <p className="text-xl font-extrabold mt-2">
        {typeof product.price === "number"
          ? `$${product.price.toFixed(2)}`
          : product.price}
      </p>
      <button className="mt-4 px-6 py-2 bg-white text-purple-700 font-semibold rounded-xl shadow-md hover:bg-purple-500 hover:text-white transition-all duration-300">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
