import Products from "./Products";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import { useFilters } from "../hooks/useFilters";
import useLoadProducts from "../hooks/useLoadProducts";

const HeroP = () => {
  const { products } = useLoadProducts();
  const { setFilters, filterProducts } = useFilters();
  console.log("products");
  console.log(products);

  return (
    <div className="w-full flex place-content-center items-center h-screen pt-16">
      <section className="flex w-[90%] h-full ">
        <ul className=" flex flex-wrap  justify-between w-full h-full gap-2">
          <Products products={filterProducts(products)} />
        </ul>
      </section>
    </div>
  );
};

export default HeroP;
