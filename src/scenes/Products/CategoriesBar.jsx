import React from "react";
import CategorieButton from "./CategorieButton";
import { Link } from "react-router-dom";

const CategoriesBar = () => {
  return (
    <section className="flex w-[90%] h-[10%] justify-between items-center gap-3 overflow-scroll">
      <CategorieButton text={"Fundicion"} />
      <CategorieButton text={"Manualidades"} />
      <CategorieButton text={"Materiales"} />
      <CategorieButton text={"Metalurgica"} />
    </section>
  );
};

export default CategoriesBar;
