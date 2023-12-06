import ProductCard from "../Products/Hero/ProductCards/ProductCard";
import { useParams } from "react-router-dom";
import useRelatedProducts from "./hooks/useRelatedProducts";

const RelatedArticles = ({category}) => {

  const { relatedProducts } = useRelatedProducts(category);

  return (
    <div className="flex flex-col gap-1 h-auto w-[90%]">
      <h3 className="text-black mb-6">De la misma categoria</h3>
      <ul className="grid gap-3 grid-cols-[repeat(2,minmax(100px,1fr))] auto-rows-[minmax(150px,1fr)] mb-3 text-black">
      {relatedProducts.map((producto) => (
        <li className=" w-full h-full flex" key={producto.product_id}>
          <ProductCard
            name={producto.name}
            // category={producto.category}
            price={producto.price}
            // description={producto.description}
            image={producto.image}
            id={producto.product_id}
            
            // btnText={"Ordenar"}
          />

          {/* <FavIcon className="" fav={producto.favorite} /> */}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default RelatedArticles;
