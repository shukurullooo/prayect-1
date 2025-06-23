import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  // const [page, setPage] = useState(1);
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    // setPage(page);
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)
  };

  return (
    <div>
      <h2>Shop</h2>
      {/* <Products data={data?.data?.products}/> */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.products?.map((product) => (
          <div key={product.id} className="bg-white shadow hover:shadow-md flex flex-col">
            <img onClick={() => navigate(`/product/${product.id}`)} src={product.thumbnail} alt="" />
            <div className="bg-[#F4F5F7] p-4 mt-4 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-500 text-sm truncate">{product.brand}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Shop;
