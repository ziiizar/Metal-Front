import metalconf from "../../../api/metalconf";

export const login = async ({ email, password }) => {
  const resp = await metalconf.post(
    "Users/Login",
    { email, password }
   
  );

  return resp;
};
