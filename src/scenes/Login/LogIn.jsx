import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useLoged } from "../../hooks/useLoged";
import { login } from "./services/login";

const LogIn = () => {
  const navigate = useNavigate();
  const { isLoged, setIsLoged, logIn, token, setToken, handleToken } =
    useLoged();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const handleLog = () => {
  //     setIsLoggedIn(!isLoggedIn)
  //     console.log("sirve")

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = login(username,password)

    try {
      const resp = await axios.post(
        "http://127.0.0.1:8000/Users/Login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const acces_token = resp.data.access_token;

      handleToken(acces_token);

      logIn();
      window.localStorage.setItem("token", acces_token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }

    console.log(username, password);

    // console.log(resp.data)

    // console.log(isLoged)
    // console.log(setIsLoged)
    // handleLog()
  };

  return (
    <div className="h-full min-h-screen w-full flex place-content-center  ">
      <form
        onSubmit={handleSubmit}
        className="w-2/5 h-4/5 flex gap-3 place-content-center bg-gray-800 mt-10 flex-col px-4 py-3 shadow-lg rounded-md max-w-sm min-w-fit shrink-[40] "
      >
        <div className="flex place-content-start">
          <img
            src="../assets/Nuevo LOgo metalconf.png"
            alt="logo"
            className="w-[50px]"
          />
        </div>
        <div className="flex mr-3 ml-3 justify-start space-x-8 text-white ">
          <li className="list-none mr-3 cursor-pointer ">Iniciar Sesion</li>
          <li className="list-none cursor-pointer ">Crear Cuenta</li>
        </div>

        <div className="flex flex-col space-y-8 mt-8">
          {/* <div className="h-10 transition-all flex outline outline-1 outline-blue-500 rounded-md  bg-orange-800" id="correo">
        <input onChange={(e)=>setEmail(e.target.value)} className="w-11/12 pl-3 h-full outline-none  bg-orange-800" type="email" name="" id="correo" placeholder=" Correo"/>
        <div className='flex items-center'>
          <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
          <lord-icon
              src="https://cdn.lordicon.com/tyounuzx.json"
              trigger="hover"
              colors="primary:#121331,secondary:#ffffff"
              style={{width:"25px",height:"25px"}}>
          </lord-icon>
        </div>
      </div> */}
          <div className="h-10 max-w-sm">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-3 h-full rounded-md bg-orange-800"
              type="text"
              name=""
              id=""
              placeholder=" Usuario"
            />
          </div>
          <div className="h-10 max-w-sm">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full pl-3 rounded-md bg-orange-800"
              type="password"
              name=""
              id=""
              placeholder=" Contrasena"
            />
          </div>
          {/* <div className="h-10 max-w-sm transition-all" id="check">
        <input onChange={(e)=>setRol(e.target.value)} className="w-full h-full pl-3 rounded-md bg-orange-800" type="text" name="" id="check" placeholder=" Rol"/>
      </div> */}

          <div className="h-[1px] bg-sky-800"></div>

          <button className="w-full h-10 rounded-md hover:bg-amber-800 transition-all bg-amber-600">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
