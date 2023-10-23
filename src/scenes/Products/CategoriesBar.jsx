import React from "react";
import CategorieButton from "./CategorieButton";
import { Link } from "react-router-dom";

const CategoriesBar = () => {
  return (
    <section className="flex flex-col w-full h-[10%] gap-10 border-b-2">
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure
        eius voluptatem iste? Consectetur sit quae, dolor similique est officia
        adipisci aut ducimus commodi eligendi neque. Fuga laborum quo deleniti.
      </h3>

      <div className="h-[50px] w-full flex justify-evenly items-center">
        <CategorieButton text={"Fundicion"} />
        <CategorieButton text={"Manualidades"} />
        <CategorieButton text={"Materiales"} />
        <CategorieButton text={"Metalurgica"} />
        <Link className="max-sm:my-3 max-sm:mx-3" to="/Products/NewProduct">
          <button className="bg-orange-400 hover:bg-orange-800 border-orange-500 px-2 py-1.5 rounded-md duration-500">
            New Product
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesBar;
