import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  console.log("This is Home Page");

  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  console.log("Data: ", data);
  return (
    <div className="w-full min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Luxury Tech Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="rounded-xl object-cover"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-900">
              {product.title}
            </h2>
            <p className="text-gray-500 mt-2">Brand: {product.brand}</p>
            <p className="text-gray-500">Model: {product.model}</p>
            <p className="text-lg font-bold mt-2 text-gray-800">
              {typeof product.price === "number"
                ? `$${product.price.toFixed(2)}`
                : product.price}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="text-center my-4">
        <Link href={"/products"}>
          {" "}
          <button className="btn btn-primary text-white">Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
