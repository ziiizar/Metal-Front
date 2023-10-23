import { useEffect, useState } from "react";
import { useLoged } from "../../../hooks/useLoged";
import { loadMe } from "../services/loadMe";

export function useUserData() {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    // console.log("token");
    // console.log(token);
    loadMe(token).then(setData)
  }, [token]);

  // console.log(data)

  return { data };
}

export default useUserData;
