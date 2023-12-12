import axios from "axios";

export const signUp = async ({ email,name,password }) => {

  console.log(email,name,password)
    const resp = await axios.post("http://127.0.0.1:8000/api/Users/NewUser",{name,email,password},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return resp;
};
