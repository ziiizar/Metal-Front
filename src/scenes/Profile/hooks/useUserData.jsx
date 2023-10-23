import { useEffect, useState } from "react";
import { useLoged } from "../../../hooks/useLoged";
import { loadMe } from "../services/loadMe";

export function useUserData() {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    loadMe(token).then(setData);
  }, [token]);

  return { data };
}

export default useUserData;
