import Products from "./Products";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import { useFilters } from "../hooks/useFilters";
import useLoadProducts from "../hooks/useLoadProducts";
import CategoriesBar from "../CategoriesBar";
import SearchBar from "../SearchBar";
import SpecialOffert from "../SpecialOffert";
import HorizontalScrollCarousel from "../Horzontal";
import CategoriesDropDown from "../CategoriesDropdown";
import ProductCard from "./ProductCards/ProductCard";

const HeroP = () => {
  const { products } = useLoadProducts();
  const { setFilters, filterProducts } = useFilters();

  return (
    <div className="flex flex-col px-8 pt-8">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      {/* <Filters changeFilters={setFilters}></Filters> */}
      <div className="flex justify-between">
      <SearchBar products={products}></SearchBar>

        <CategoriesDropDown></CategoriesDropDown>
      </div>

      <section className="flex w-[90%]  place-content-center items-center h-screen">
            <ul className=" grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] grid-rows-[repeat(auto-fit,minmax(80px,1fr))] auto-rows-[minmax(150px,1fr)]  justify-between w-full h-full gap-10">
              <Products products={filterProducts(products)} />

              {/* //TODO Esto es temporal, se queda lo de arriba */}
            Algo
            </ul>
          </section>
      <HorizontalScrollCarousel />

    </div>
    //     <div className="w-screen flex flex-col place-content-center items-center h-auto gap-5 ov">

    //       
    //       <SpecialOffert></SpecialOffert>

         

    //     </div>
  );
};

export default HeroP;
