import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OurPradacts = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

 
  

  const { data } = getProduct;



  return (
    <div>
      <h2>Shop</h2>
      <div className="grid grid-cols-4">
        {data?.data?.products?.map((product) => (
          <div key={product.id}>
            <img onClick={()=> navigate(`/product/${product.id}`)} src={product.thumbnail} alt="" />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default OurPradacts;
