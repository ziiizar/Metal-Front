import axios from "axios";

export const signUp = async ({ id,email,username,password, rol, enabled }) => {
    const resp = await axios.post("http://127.0.0.1:8000/Users/NewUser",{id,email,username,password, rol, enabled},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return resp;
};
