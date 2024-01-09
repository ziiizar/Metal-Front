import React from "react";
import Terms from "../scenes/Login/Terms";
import Title from "../scenes/Login/Title";
import Welcome from "./Welcome";
import Button from "../scenes/Login/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
    
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Welcome>
      <>
        <div className="flex flex-col justify-between h-3/4 gap-y-4 ">
          <div className="flex flex-col gap-y-2 w-full h-[80%]">
            <Title title={"Sign In"} subtitle={"Glad you're back!"} />
            <form className="flex flex-col gap-4" action="">
              <input
                onChange={handleForm}
                className="h-9 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                placeholder="Username"
                type="text"
                name="name"
                id=""
              />
              <input
              onChange={handleForm}
                className="h-9 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                placeholder="Password"
                type="text"
                name="password"
                id=""
              />
              <div>
                <input
                  className="place-self-start outline-none "
                  type="checkbox"
                  name=""
                  id=""
                />{" "}
                <span className="text-sm ">Remember me</span>
              </div>
              <div className=" flex flex-col gap-y-2">
                <Button text={"Sign In"}></Button>
                <Link className="text-xs self-center" to="/ForgotP">
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>
          <div className=" flex flex-col place-content-center items-center gap-y-2 text-xs w-full h-[20%]">
            <span>------------------- or -------------------</span>
            <div className="flex w-full h-[60%] place-content-center items-center">
              <img
                className="w-[10%] h-[55%] self-center cursor-pointer"
                src="/assets/Frame 3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Terms
          text={"Don’t have an account?"}
          link={<Link to="/SignUp">Sing Up</Link>}
        />
      </>
    </Welcome>
  );
};

export default SignIn;
