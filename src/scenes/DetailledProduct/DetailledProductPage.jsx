import RelatedArticles from "./RelatedArticles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useLoadProduct from "./hooks/useLoadProduct";
import ProductCard from "./ProductCard";

const DetailledProductPage = () => {
  const {product_id} = useParams();

  const {productData} = useLoadProduct(product_id);

  return (
    <div className="flex flex-col gap-4">
      <ProductCard
        description={productData.description}
        image={productData.image}
        name={productData.name}
        price={productData.price}
        total={0}
        key={productData.id}
      ></ProductCard>
      <RelatedArticles></RelatedArticles>
    </div>
  );
};

export default DetailledProductPage;
