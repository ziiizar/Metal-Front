import HeaderMainFooterLayout from "../../Layouts/HeaderMainFooterLayout";
import CategoriesBar from "./CategoriesBar";
import HeroP from "./Hero/HeroP";
import SearchBar from "./SearchBar";
import SpecialOffert from "./SpecialOffert";

const ProductsPage = () => {
  return (
    <HeaderMainFooterLayout>
      <div className=" h-full min-h-[75vh] w-[98.72vw] ">
      {/* <picture className="w-full h-[400px] ">
        <img className="h-[400px] w-full" src="/assets/familia y casa.png" alt="" />
      </picture> */}
        <HeroP />
      </div>
    </HeaderMainFooterLayout>
  );
};

export default ProductsPage;
