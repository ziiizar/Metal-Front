import RelatedArticles from "./RelatedArticles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useLoadProduct from "./hooks/useLoadProduct";
import ProductCard from "./ProductCard";
import SearchBar from "./../Products/SearchBar";


const DetailledProductPage = () => {
  const { product_id } = useParams();

  const { productData } = useLoadProduct(product_id);
  const category = productData.category;
  

  return (
    <div className="flex flex-col gap-4 place-content-center items-center h-auto w-full">
      <SearchBar></SearchBar>
      <ProductCard
        description={productData.description}
        image={productData.image}
        name={productData.name}
        price={productData.price}
        total={0}
        key={productData.id}
      ></ProductCard>
      <RelatedArticles category={category}></RelatedArticles>
    </div>
  );
};

export default DetailledProductPage;
