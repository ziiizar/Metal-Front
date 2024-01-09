import { Link } from "react-router-dom";
import { useLoged } from "../../store/logedStore";
import { useState, useEffect } from "react";
import { Moon } from "react-feather";
import Sun from "../Icons/Sun";
import LavaButton from "./LavaButton";

const Navbar = () => {
  const { isAuth, logout } = useLoged((state) => state);
  const [darkMode, setDarkMode] = useState(null);
  const header = document.querySelector("#navigation");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleTheme = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        const color = entry.target.getAttribute("data-header-color");
        // header.style.color = color
        header.style.color = color;
        document.getElementById('navigation').style.color = color;
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".landing");
  sections.forEach((section) => observer.observe(section));

  return (
    <div
      id="navigation"
      className="w-full flex place-content-center items-center justify-between px-4 py-2 bg-inherit text-current"
    >
      <Link to={"/"}>
        <picture className="w-[30px] h-[30px]">
          <img src="/assets/Logo y NOmbre bien 1.png" alt="" />
        </picture>
      </Link>
      <ul className=" flex gap-10">
        <li>
          <Link className=" transition duration-300" to={"/Products"}>Productos</Link>
        </li>
        <li>
          <Link className=" transition duration-300">Pedidos</Link>
        </li>
        <li>
          <Link className=" transition duration-300">About us</Link>
        </li>
        <li>
          <Link className=" transition duration-300">Favoritos</Link>
        </li>
        <li>
          <Link to={"/Admin/Dashboard"} className=" transition duration-300">Admin</Link>
        </li>
      </ul>

      <div className=" flex gap-2 place-content-center items-center w-[150px]">
        {darkMode ? (
          <button onClick={handleTheme}>
            {" "}
            <Sun></Sun>
          </button>
        ) : (
          <button onClick={handleTheme}>
            <Moon></Moon>
          </button>
        )}

        {isAuth ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                fill="#000"
                fillOpacity="0.8"
                fillRule="evenodd"
                d="M15 0C6.715 0 0 6.715 0 15s6.715 15 15 15 15-6.715 15-15S23.285 0 15 0zM9.75 11.25a5.25 5.25 0 1110.501 0 5.25 5.25 0 01-10.501 0zm14.637 11.226A11.978 11.978 0 0115 27a11.977 11.977 0 01-9.387-4.524C8.044 20.732 11.363 19.5 15 19.5c3.637 0 6.956 1.232 9.387 2.976z"
                clipRule="evenodd"
              ></path>
            </svg>
            <button className=" transition duration-300" onClick={logout}>Cerrar sesion</button>
          </>
        ) : (
          <LavaButton>
            <Link className=" transition duration-300" to={"/LogIn"}>Iniciar Sesion</Link>
          </LavaButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
