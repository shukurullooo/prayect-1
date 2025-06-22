import { useProduct } from "@/api/hooks/useProduct";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 12;

const OurPradacts = () => {
  const navigate = useNavigate();
  const [skip, setSkip] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  const { getProduct } = useProduct({});
  const { data, refetch, isLoading } = getProduct({ skip, limit: PAGE_SIZE });

  useEffect(() => {
    if (data?.data?.products) {
      setAllProducts((prev) =>
        skip === 0 ? data.data.products : [...prev, ...data.data.products]
      );
    }
  }, [data, skip]);

  const handleShowMore = () => {
    const newSkip = skip + PAGE_SIZE;
    setSkip(newSkip);
    refetch({ skip: newSkip, limit: PAGE_SIZE });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow hover:shadow-md  flex flex-col"
          >
            <img
              onClick={() => navigate(`/product/${product.id}`)}
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover cursor-pointer rounded"
            />

            <div className="bg-[#F4F5F7] p-4 mt-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-500 text-sm truncate">{product.brand}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {allProducts.length < (data?.data?.total || 0) && (
        <div className="flex justify-center mt-10">
          <button
            className="bg-[#B88E2F] text-white px-6 py-3 rounded hover:bg-[#a77c1d] transition disabled:opacity-50"
            onClick={handleShowMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default OurPradacts;
