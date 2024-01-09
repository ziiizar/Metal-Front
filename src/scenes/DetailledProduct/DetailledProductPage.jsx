import RelatedArticles from "./RelatedArticles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useLoadProduct from "./hooks/useLoadProduct";
import DetailledProductCard from "./DetailledProductCard";
import SearchBar from "./../Products/SearchBar";
import HeaderMainFooterLayout from "../../Layouts/HeaderMainFooterLayout";

const DetailledProductPage = () => {
  const { product_id } = useParams();

  const { productData } = useLoadProduct(product_id);
  const category = productData.category;

  return (
    <HeaderMainFooterLayout>
      {" "}
      <div className="flex flex-col gap-4 place-content-center items-center h-auto w-full pt-5">
        <SearchBar></SearchBar>
        <DetailledProductCard
          product_id={product_id}
          description={productData.description}
          image={productData.image}
          name={productData.name}
          price={productData.price}
          total={0}
          key={productData.id}
        ></DetailledProductCard>
        <RelatedArticles category={category}></RelatedArticles>
      </div>
    </HeaderMainFooterLayout>
  );
};

export default DetailledProductPage;
