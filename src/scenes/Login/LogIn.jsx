import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Terms from "./Terms";
import Title from "./Title";
import Button from "./Button";
import LoginLayout from "../../Layouts/LoginLayout";
import { useLoged } from "../../store/logedStore";

const LogIn = () => {
  const navigate = useNavigate();
  // const { isLoged, setIsLoged, logIn, token, setToken, handleToken } =
  //   useLoged();
  const { setToken, setProfile } = useLoged((state) => state);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        "http://127.0.0.1:8000/api/Users/Login",
        { email: form.email, password: form.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(form);

      const acces_token = resp.data.access_token;
      setToken(acces_token);

      navigate("/");
    } catch (error) {
      console.log(form);
      console.log(error.response.data);
    }
  };

  return (
    <LoginLayout>
      <div className="flex flex-col justify-between h-3/4 gap-y-4 text-black z-20">
        <div className="flex flex-col gap-y-2 w-full h-[90%]">
          <Title title={"Iniciar Sesion"} subtitle={""} />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 w-full"
            action=""
          >
            <div className="flex flex-col gap-5 w-full">
              <div className="relative flex w-full">
                <input
                  required
                  onChange={handleForm}
                  className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                  // placeholder="Username"
                  type="text"
                  name="email"
                  id=""
                />
                <label
                  htmlFor="input"
                  className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none"
                >
                  Usuario
                </label>
              </div>
              <div className="relative flex w-full">
                <input
                  required
                  onChange={handleForm}
                  className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                  // placeholder="Username"
                  type="text"
                  name="password"
                  id=""
                />
                <label
                  htmlFor="input"
                  className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3 transition-all peer-focus:text-black  text-gray-600 pointer-events-none"
                >
                  Contraseña
                </label>
              </div>
            </div>

            <div className=" flex flex-col gap-y-2 place-content-center items-center">
              <Button text={"Iniciar Sesion"}></Button>
              {/* <Link className="text-xs self-center" to="/ForgotP">
                Forgot password?
              </Link> */}
            </div>
          </form>
        </div>
        <div className=" flex flex-col place-content-center items-center gap-y-2 text-xs w-full h-[20%]"></div>
      </div>
      <Terms
        text={"No tienes cuenta?"}
        link={
          <Link className="hover:text-orange-800" to="/SignUp">
            Jodete
          </Link>
        }
      />
    </LoginLayout>
  );
};

export default LogIn;
