import Terms from "./Terms";
import Title from "./Title";
import Welcome from "./Welcome";
import { Link } from 'react-router-dom';
import Button from "./Button";
import { useState } from "react";
import { signUp } from "./services/signUp";

const SignUp = () => {

  const [form, setForm] = useState({
    id:0,
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol:"cliente",
    enabled: true

    
  });

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const resp = signUp(form.id,form.username,form.email,form.password,form.rol, form.enabled,)


    console.log(resp)
    e.target.reset()
  }

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Welcome>
    <div className="flex flex-col justify-between h-3/4 gap-y-4 text-black z-20">
    <div className="flex flex-col gap-y-2 w-full h-[90%]">
      <Title title={"Crear Cuenta"} subtitle={""} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full" action="">
        <div className="flex flex-col gap-5 w-full">
        <div className="relative flex w-full">
            <input required
              onChange={handleForm}
              className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
              // placeholder="Username"
              type="text"
              name="username"
              id=""
            />
            <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Usuario</label>
          </div>
          <div className="relative flex w-full">
            <input required
              onChange={handleForm}
              className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
              // placeholder="Username"
              type="text"
              name="email"
              id=""
            />
            <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Correo</label>
          </div>
          <div className="relative flex w-full">
            <input required
              onChange={handleForm}
              className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
              // placeholder="Username"
              type="password"
              name="password"
              id=""
            />
            <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Contraseña</label>
          </div>
          <div className="relative flex w-full">
            <input required
              onChange={handleForm}
              className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
              // placeholder="Username"
              type="password"
              name="password"
              id=""
            />
            <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Confirmar Contraseña</label>
          </div>
            
          <div className=" flex flex-col gap-y-2 place-content-center items-center">
              <Button text={"Crear Cuenta"}></Button>
              {/* <Link className="text-xs self-center" to="/ForgotP">
                Forgot password?
              </Link> */}
            </div>
                </div>
              </form>
            </div>
          
          </div>
          <Terms
            text={"Ya tienes una cuenta?"}
            link={<Link className="hover:text-orange-800" to="/LogIn">Iniciar Sesion</Link>}
          />
     
    </Welcome>
  );
};

export default SignUp;
