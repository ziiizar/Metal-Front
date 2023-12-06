import { useEffect, useState } from "react";
import { getFavs } from "../services/getFavs";

export function useGetFavs(user_id) {
  const [favs, setFavs] = useState([]);
  const token = window.localStorage.getItem("token");


  useEffect(() => {
    const fetchData = async () => {
      const newFavs = await getFavs(token, user_id);
      setFavs(newFavs);
    };
    fetchData();
  }, [user_id]);
  return { favs };
}

export default useGetFavs;
