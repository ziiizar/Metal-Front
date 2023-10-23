import axios from "axios";

export const login = async ({ username, password }) => {
  const resp = await axios.post(
    "http://127.0.0.1:8000/Users/Login",
    { username, password },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return resp;
};
