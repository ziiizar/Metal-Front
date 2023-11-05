import CategoriesBar from "./CategoriesBar";
import HeroP from "./Hero/HeroP";
import SearchBar from "./SearchBar";

const ProductsPage = () => {
  return (
    <div className=" h-full w-full flex flex-col place-content-center items-center gap-5 ">
      <SearchBar></SearchBar>
      <CategoriesBar></CategoriesBar>
      <HeroP />
    </div>
  );
};

export default ProductsPage;
