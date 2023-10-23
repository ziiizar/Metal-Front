import React from "react";
import axios from "axios";
import { useState } from "react";

const NewProduct = () => {

  return (
    <div className="bg-green-800 w-[800px] h-[600px] flex place-content-center items-center">
      <form className="gap-4 flex flex-wrap" action="">
        <input type="text" name="" id="" placeholder="id_producto" />
        <input type="text" name="" id="" placeholder="nombre" />
        <input type="text" name="" id="" placeholder="precio" />
        <input type="text" name="" id="" placeholder="descripcion" />
        <input type="text" name="" id="" placeholder="favorito" />
        <input type="text" name="" id="" placeholder="stock" />
        <input type="text" name="" id="" placeholder="categoria" />
        <button type="submit" className="bg-orange-700">
          Aceptar
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
