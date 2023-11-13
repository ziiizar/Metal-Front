import React from "react";
import axios from "axios";
import { useState } from "react";

const NewProduct = () => {
  return (
    // <div className="bg-green-800 w-[800px] h-[600px] flex place-content-center items-center">
    //   <form className="gap-4 flex flex-wrap" action="">
    //     <input type="text" name="" id="" placeholder="id_producto" />
    //     <input type="text" name="" id="" placeholder="nombre" />
    //     <input type="text" name="" id="" placeholder="precio" />
    //     <input type="text" name="" id="" placeholder="descripcion" />
    //     <input type="text" name="" id="" placeholder="favorito" />
    //     <input type="text" name="" id="" placeholder="stock" />
    //     <input type="text" name="" id="" placeholder="categoria" />
    //     <button type="submit" className="bg-orange-700">
    //       Aceptar
    //     </button>
    //   </form>
    // </div>

    <div className="relative">
                <input
                  // onChange={handleForm}
                  className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2  outline-none "
                  // placeholder="Username"
                  type="text"
                  name="username"
                  id=""
                />
                <label htmlFor="input" className="absolute top-1 left-0 cursor-text peer-focus:text-8 peer-focus:-top-4 transition-all  text-black" >Username</label>
              </div>
  );
};

export default NewProduct;
