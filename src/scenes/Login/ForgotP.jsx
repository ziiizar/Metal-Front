import Terms from "./Terms";
import Title from "./Title";
import Welcome from "./Welcome";
import { Link } from 'react-router-dom';
import Button from "./Button";
import { useState } from "react";

const ForgotP = () => {

  const [form, setForm] = useState({
   
    password: "",
    
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Welcome>

          
            <div className="flex flex-col gap-y-2">
              <Title title={"Forgot Password"} subtitle={"Please enter your email"} />
              <form className="flex flex-col gap-3" action="">
                <input
                 onChange={handleForm}
                  className="h-8 rounded-md bg-inherit border-[1px] p-2 text-white outline-none"
                  placeholder="example@mail.com"
                  type="email"
                  name="password"
                  id=""
                />

                <Button text={"Reset Password"}></Button>
                
              </form>
            </div>
           
          <Terms
            text={"Dont you have any account?"}
            link={<Link to="/SignUp">Sing Up</Link>}
          />
   
    </Welcome>
  );
};

export default ForgotP;