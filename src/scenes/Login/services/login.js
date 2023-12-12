import axios from "axios";

export const login = async ({ email, password }) => {
  const resp = await axios.post(
    "http://127.0.0.1:8000/api/Users/Login",
    { email, password }
   
  );

  return resp;
};
