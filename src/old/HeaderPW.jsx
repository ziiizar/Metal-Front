import React from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useLoged } from "../hooks/useLoged";

const HeaderPW = () => {
  const { isLoged } = useLoged();

  defineElement(lottie.loadAnimation);

  return (
    <header className="w-full h-[80px]  z-50 p-5 text-white bg-gray-800 shadow">
      <nav className="h-full flex items-center justify-between text-white bg-gray-800  ">
        <Link className=" flex items-center justify-between" to="/">
          <a href="#" className="ml-6 font-sans">
            <span className="metal">METAL</span>CONF
          </a>
        </Link>

        <span className="text-3xl cursor-pointer mx-2 sm:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>

        <ul className=" p-3  mr-6  mb-2  space-x-4 sm:items-center  sm:flex z-10 sm:z-auto sm:static absolute bg-gray-800 w-full left-0 sm:w-auto pl-6 sm:pl-0 sm:opacity-100  top-[-300px] transition-all ease-in duration-500">
          <Link
            className="max-sm:my-3 max-sm:mx-4  hover:text-amber-700 transition-all"
            to="/Products"
          >
            <a className="inline-block" href="#">
              Productos
            </a>
          </Link>
          <Link
            className="max-sm:my-3 max-sm:mx-3  hover:text-amber-700 transition-all"
            to="/Events"
          >
            <a className="inline-block" href="#">
              Eventos
            </a>
          </Link>
          <Link
            className="max-sm:my-3 max-sm:mx-3 hover:text-amber-700 transition-all "
            to="/AboutUs"
          >
            <a className="inline-block" href="#">
              Quienes Somos
            </a>
          </Link>
          <Link
            to={"ShoppingCar"}
            className="max-sm:my-3 max-sm:mx-3  hover:text-amber-700 transition-all"
          >
            <a className="inline-block" href="#">
              <lord-icon
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                stroke="80"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </a>
          </Link>

          {isLoged ? (
            <Link to={"MyProfile"}>
              <button className="bg-red-950 rounded-full">P</button>
            </Link>
          ) : (
            <Link className="max-sm:my-3 max-sm:mx-3" to="/LogIn">
              <button className="bg-orange-400 hover:bg-orange-800 border-orange-500 px-2 py-1.5 rounded-md duration-500">
                Iniciar Sesion
              </button>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPW;
