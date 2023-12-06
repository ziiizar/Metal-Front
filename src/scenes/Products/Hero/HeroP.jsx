import Products from "./Products";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import { useFilters } from "../hooks/useFilters";
import useLoadProducts from "../hooks/useLoadProducts";
import CategoriesBar from "../CategoriesBar";
import SearchBar from "../SearchBar";
import SpecialOffert from "../SpecialOffert";

const HeroP = () => {
  const { products } = useLoadProducts();
  const { setFilters, filterProducts, } = useFilters();

  return (
    <div className="w-full flex flex-col place-content-center items-center h-auto gap-5 pt-6">
      {/* <SearchBar products={products}></SearchBar> */}
      <SpecialOffert></SpecialOffert>
      {/* <CategoriesBar></CategoriesBar> */}
<Filters changeFilters={setFilters}></Filters>
      <section className="flex w-[90%] h-full place-content-center items-center ">
        <ul className=" grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] grid-rows-[repeat(auto-fit,minmax(80px,1fr))] auto-rows-[minmax(150px,1fr)]  justify-between w-full h-full gap-5">
          <Products products={filterProducts(products)} />
        </ul>
      </section>
    </div>
  );
};

export default HeroP;
