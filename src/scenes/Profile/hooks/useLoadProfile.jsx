import { useEffect, useState } from "react";
import { loadProfile } from "../services/loadProfile";

export function useProfileData(user_id) {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    loadProfile(user_id,token).then(setData);
  }, [user_id,token]);

  return { data };
}

export default useProfileData;