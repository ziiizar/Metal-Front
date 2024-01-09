import metalconf from "../../../api/metalconf";

export const signUp = async ({ email,name,password }) => {

  console.log(email,name,password)
    const resp = await metalconf.post("Users/NewUser",{name,email,password},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return resp;
};
