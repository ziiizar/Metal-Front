import React from "react";
import Terms from "./Terms";
import Title from "./Title";
import Welcome from "./Welcome";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { useState } from "react";
import { useLoged } from "../../hooks/useLoged";
import { login } from "./services/login";

const SignIn = () => {
  const navigate = useNavigate();
  const { isLoged, setIsLoged, logIn, token, setToken, handleToken } =
    useLoged();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <Welcome>
      <div className="flex flex-col justify-between h-3/4 gap-y-2 ">
        <div className="flex flex-col gap-y-2">
          <Title title={"Sign In"} subtitle={"Glad you're back"} />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            action=""
          >
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
              placeholder="Username"
              type="text"
              name=""
              id=""
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
              placeholder="Password"
              type="text"
              name=""
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
              <Link className="text-xs self-center" to="/ForgotPassword">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
        <div className=" flex flex-col place-content-center items-center gap-y-2 text-xs">
          <span>------------------- or -------------------</span>
          <img
            className="w-1/6 h-2/5 self-center cursor-pointer"
            src="public\devicon_google.svg"
            alt=""
          />
        </div>
      </div>
      <Terms
        text={"Dont you have any account?"}
        link={<Link to="/SignUp">Sing Up</Link>}
      />
    </Welcome>
  );
};

export default SignIn;
