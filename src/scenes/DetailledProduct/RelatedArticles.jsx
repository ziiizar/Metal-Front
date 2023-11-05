import Best_product from "../home/Best_product"
import { useParams } from "react-router-dom";
import useRelatedProducts from "./hooks/useRelatedProducts";

const RelatedArticles = ({category}) => {

  const { relatedProducts } = useRelatedProducts(category);

  return (
    <div className="flex flex-col gap-1 h-[28%] w-[90%]">
      <h3 className="text-black">De la misma categoria</h3>
      <ul className="flex">
      {relatedProducts.map((producto) => (
        <li className=" w-[48%] h-full flex" key={producto.product_id}>
          <Best_product
            name={producto.name}
            // category={producto.category}
            price={producto.price}
            description={producto.description}
            image={producto.image}
            id={producto.product_id}
            btnText={"Ordenar"}
          />

          {/* <FavIcon className="" fav={producto.favorite} /> */}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default RelatedArticles;
