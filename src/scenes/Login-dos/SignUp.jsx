import React from "react";
import Terms from "./Terms";
import Title from "./Title";
import Welcome from "./Welcome";
import { Link } from 'react-router-dom';
import Button from "./Button";
import axios from 'axios';
import { useState } from 'react'

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const rol = "cliente";
  const id = 0
  const enabled = false

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const resp = await axios.post("http://127.0.0.1:8000/Users/NewUser",{id,email,username,password, rol, enabled})


    console.log(email,username,password)
    console.log(resp)
    e.target.reset()
  }

  return (
    <Welcome>
      
          <div className="flex flex-col justify-between h-3/4">
            <div className="flex flex-col gap-y-2">
              <Title title={"Sign Up"} subtitle={"Just some details to get you in!"} />
              <form  onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
                <input onChange={(e)=>setUsername(e.target.value)}
                  className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                  placeholder="Username"
                  type="text"
                  name=""
                  id=""
                />
                <input onChange={(e)=>setEmail(e.target.value)}
                  className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                  placeholder="Email/Phone"
                  type="text"
                  name=""
                  id=""
                />
                
                <input onChange={(e)=>setPassword(e.target.value)}
                  className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                  placeholder="Password"
                  type="password"
                  name=""
                  id=""
                />
                <input
                  className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                  placeholder="Confirm Password"
                  type="password"
                  name=""
                  id=""
                />
    
                <Button text={"Sign Up"}></Button>
              
              </form>
            </div>
            <div className=" flex flex-col items-center gap-y-2 place-content-center text-xs">
              <span>------------------- or -------------------</span>
              <img className="w-1/6 h-2/5 self-center cursor-pointer" src="public\devicon_google.svg" alt="" />
            </div>
          </div>
          <Terms
            text={"Already registered?"}
            link={<Link to="/LogIn">Log In</Link>}
          />
     
    </Welcome>
  );
};

export default SignUp;
