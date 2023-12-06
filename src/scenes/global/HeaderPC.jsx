import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderPC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="w-full h-[10vh] relative flex place-content-center items-center">
      <header className={`flex flex-col w-[90%] fixed top-4 rounded-xl shadow-xl backdrop-blur-xl z-100 place-content-center items-center md:hidden bg-navbar  ${isOpen ? "h-auto" : "h-14"}`}>
        <div className="w-[90%] h-full flex justify-between py-3">
          <button onClick={handleClick} className="w-[8%] h-[90%] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="34"
              fill="none"
              viewBox="0 0 37 34"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M5.35 7.092c-.406 0-.795.145-1.081.402a1.305 1.305 0 00-.448.97c0 .364.161.713.448.97.286.258.675.402 1.08.402h25.983a1.62 1.62 0 001.081-.401c.287-.258.448-.607.448-.97 0-.365-.161-.714-.448-.97a1.62 1.62 0 00-1.08-.403H5.348zM3.82 16.697c0-.364.161-.713.448-.97a1.621 1.621 0 011.08-.402h25.983c.406 0 .795.144 1.081.402.287.257.448.606.448.97s-.161.713-.448.97a1.62 1.62 0 01-1.08.402H5.348c-.405 0-.794-.145-1.08-.402a1.305 1.305 0 01-.448-.97zm0 8.233c0-.363.161-.712.448-.97a1.621 1.621 0 011.08-.402h25.983c.406 0 .795.145 1.081.402.287.258.448.607.448.97 0 .364-.161.713-.448.97a1.62 1.62 0 01-1.08.402H5.348c-.405 0-.794-.144-1.08-.401a1.305 1.305 0 01-.448-.97z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

         

          <img src="/assets/Logo y NOmbre bien 1.png" alt="" />
          <button className="w-[8%] h-[90%] flex">
            <img className="" src="/assets/mingcute_user-4-fill.png" alt="" />
          </button>
        </div>

        <ul className={`flex flex-col gap-4 w-full ease-in-out bg-gris text-black ${isOpen ? "md:flex" : "hidden "}`}>
            <li> <button className="h-[90%] flex">
              <Link to={"/"}>Inicio</Link>
            </button></li>
            <li><button className="h-[90%] flex">
              <Link to={"/"}>Productos</Link>
            </button></li>
            <li>Carrito</li>
            <li><button className="h-[90%] flex">
              <Link to={"/"}>About us</Link>
            </button></li>
            <li><button className="h-[90%] flex">
              <Link to={"/"}>Pedidos</Link>
            </button></li>
            <li> <button className="h-[90%] flex">
              <Link to={"/"}>Lista de deseos</Link>
            </button></li>
          </ul>
      </header>

     

      <header className="hidden md:flex w-[90%] md:w-[65%] h-14 place-content-center items-center fixed top-4 rounded-xl shadow-xl  text-black backdrop-blur-xl z-100 bg-navbar">
        <div className="w-full h-full flex  justify-around items-center">
          <div className="h-full flex w-[90%] justify-around py-3  items-center ">
            <button className="h-[90%] flex">
              <Link to={"/"}>Inicio</Link>
            </button>
            <button className="h-[90%] flex">
              <Link to={"/Products"}>Productos</Link>
            </button>
            <button className="h-[90%] flex">
              <Link to={`/MyProfile/Orders/${2}`}>Pedidos</Link>
            </button>
            <button className="h-[90%] flex">
              <Link to={"/"}>About us</Link>
            </button>
            <button className="h-[90%] flex">
              <Link to={"/"}>Lista de deseos</Link>
            </button>
            <button className=" h-[90%] flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <path
                  fill="#000"
                  fillOpacity="0.8"
                  d="M8.94 27.5c-.744 0-1.38-.265-1.91-.794a2.594 2.594 0 01-.793-1.906 2.6 2.6 0 01.795-1.908A2.598 2.598 0 018.94 22.1c.743 0 1.38.265 1.909.794.53.529.794 1.164.793 1.906a2.6 2.6 0 01-.794 1.907c-.53.53-1.166.794-1.908.793zm13.512 0c-.743 0-1.38-.265-1.91-.794a2.594 2.594 0 01-.793-1.906 2.6 2.6 0 01.795-1.908 2.598 2.598 0 011.908-.792c.743 0 1.38.265 1.91.794.529.529.793 1.164.793 1.906a2.6 2.6 0 01-.795 1.907c-.53.53-1.166.794-1.908.793zM6.507 3.2h19.931c.518 0 .912.23 1.183.693.27.461.281.928.033 1.4l-4.797 8.64c-.247.45-.58.798-.997 1.046a2.631 2.631 0 01-1.367.371H10.426l-1.486 2.7h16.214v2.7H8.94c-1.014 0-1.78-.445-2.298-1.334s-.54-1.772-.067-2.649l1.824-3.307L3.535 3.2H.832V.5h4.392l1.283 2.7z"
                ></path>
              </svg>
            </button>
          </div>
          <button className=" h-[90%] flex items-center w-[10%] justify-around">
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
          </button>
        </div>
      </header>
    </div>
  );
};

export default HeaderPC;
