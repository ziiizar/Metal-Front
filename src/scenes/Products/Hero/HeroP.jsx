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
    <div className="w-full flex flex-col min-h-screen h-full">
      <section className="flex flex-col w-full h-[10%] gap-10 border-b-2">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iure eius voluptatem iste? Consectetur sit quae, dolor similique est
          officia adipisci aut ducimus commodi eligendi neque. Fuga laborum quo
          deleniti.
        </h3>

        <div className="h-[50px] w-full flex justify-evenly items-center">
          <Filters changeFilters={setFilters} />

          <Link className="max-sm:my-3 max-sm:mx-3" to="/Products/NewProduct">
            <button className="bg-orange-400 hover:bg-orange-800 border-orange-500 px-2 py-1.5 rounded-md duration-500">
              New Product
            </button>
          </Link>
        </div>
      </section>

      <ul className="mt-8 w-full h-full grid grid-rows-card grid-cols-card  auto-rows-[400px] auto-cols-[400px] gap-10 ml-10 ">
        <Products products={filterProducts(products)} />
      </ul>
    </div>
  );
};

export default HeroP;
